Le troisième moyen que nous avons vu pour configurer un listener HTTPS est d'utiliser un certificat CA auto-signé. 
Pour générer un tel certificat CA, nous pouvons utiliser Open SSL.

Créer un répertoire /data contenant les répertoires suivants :
- certificate : contient le certificat signé par un certificat de CA,
- private_key : contient la clé privée du certificat de CA,

## Préparation de l'environnement

Commencer par créer les répertoires suivants :

```
mkdir -p data/certificate data/private_key data/users
```

Créer ensuite un fichier de configuration openssl.conf dont le contenu est :

```
cat <<EOF> data/openssl.conf
[ca]
default_ca = foo
[foo]
dir = /data
database = /data/index.txt
new_certs_dir = /data/certificate
certificate = /data/private_key/ca.crt
serial = /data/serial
private_key = /data/private_key/ca.key
RANDFILE = /data/private_key/.rand
default_days = 365
default_crl_days = 30
default_md = md5
unique_subject = no
policy = policy_any
[policy_any]
countryName = match
stateOrProvinceName = match
organizationName = match
organizationalUnitName = match
localityName = optional
commonName = supplied
emailAddress = optional
EOF
```

Vérifier que le fichier a bien été créé :

```
ls -l data/openssl.conf
```

Par facilité, plutôt que d'installer openssl localement, nous allons utiliser un conteneur Docker nginx, qui intègre déjà openssl :

```
alias openssl="docker run --rm -it -v $PWD/data:/data --platform=linux/amd64 --workdir=/data nginx openssl"
```

Ainsi, lorsque vous taperez openssl, cela sera équivalent à lancer la commande openssl mais dans un conteneur Docker.

## Génération d'une clé privée

Générer une clé privée :

```
openssl genrsa -out /data/private_key/ca.key
```

Vérifier que le fichier a bien été créé :

```
ls -l data/private_key/ca.key
```

## Génération d'un certificat

Générer un certificat (.csr) :

```
openssl req -new -key /data/private_key/ca.key -out /data/private_key/ca.csr
```

Vous devez répondre à plusieurs questions. La sortie de la commande est :

```
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:FR
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:Paris
Organization Name (eg, company) [Internet Widgits Pty Ltd]:MyOrganization
Organizational Unit Name (eg, section) []:MyUnit
Common Name (e.g. server FQDN or YOUR name) []:MyName
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:mypassword
An optional company name []:
```

Vérifier que le fichier a bien été créé :

```
ls -l data/private_key/ca.csr
```

Vous devez spécifier le nom de domaine de l'instance CLB pour le Common Name.

Maintenant, générer un fichier .crt :

```
openssl x509 -req -days 365 -in /data/private_key/ca.csr -signkey private_key/ca.key -out /data/private_key/ca.crt
```

La sortie de la commande est :

```
Signature ok
subject=C = FR, ST = Some-State, L = Paris, O = MyOrganization, OU = MyUnit, CN = MyName
Getting Private key
```

Vérifier que le fichier a bien été créé :

```
ls -l data/private_key/ca.crt
```

## Génération d'une liste de révocation de certificat

Créer une liste de révocation de certificat pour le retrait du certificat client :

```
touch data/index.txt
openssl ca -gencrl -out /data/private_key/ca.crl -crldays 7 -config /data/openssl.conf
```

Le fichier data/index.txt est la bibliiothèque de clé CA.

La sortie de la commande est :

```
Using configuration from /data/openssl.conf
```

Vérifier que le fichier a bien été créé :

```
ls -l data/private_key/ca.crl
```

## Signature du certificat client

Générer ensuite une clé privée RSA pour le certificat client :

```
openssl genrsa -des3 -out /data/users/client.key 1024
```

Vous devez entrer une pass phrase pour protéger la clé privée.

La sortie de la commande est :

```
Generating RSA private key, 1024 bit long modulus (2 primes)
Enter pass phrase for /data/users/client.key:
Verifying - Enter pass phrase for /data/users/client.key:
```

Vérifier que le fichier a bien été créé :

```
ls -l data/users/client.key
```

Créer un fichier de requête de signature de certificat (.csr) :

```
openssl req -new -key /data/users/client.key -out /data/users/client.csr
```

Vous devez entrer la passphrase saisie précédemment.

La sortie de la commande ressemble à ceci :

```
Enter pass phrase for /data/users/client.key:
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:FR
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:Paris
Organization Name (eg, company) [Internet Widgits Pty Ltd]:MyOrganization
Organizational Unit Name (eg, section) []:MyUnit
Common Name (e.g. server FQDN or YOUR name) []:MyName
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:mypassword
An optional company name []:
```

Le mot de passe challenge est le mot de passe du certificat client. Ce n'est pas le mot de passe de la clé du client.

## Signature de la clé client

Avant de commencer, vous devez démarrer le numéro de séquence de départ pour la clé privée (4 caractères) :

```
echo 0000 > data/serial
```

Signer ensuite la clé client :

```
openssl ca -in /data/users/client.csr -cert /data/private_key/ca.crt -keyfile /data/private_key/ca.key -out /data/users/client.crt -config /data/openssl.conf
```

Vous devez taper deux fois sur y.

La sortie de la commande est :

```
Using configuration from /data/openssl.conf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'FR'
stateOrProvinceName   :ASN.1 12:'Some-State'
localityName          :ASN.1 12:'Paris'
organizationName      :ASN.1 12:'MyOrganization'
organizationalUnitName:ASN.1 12:'MyUnit'
commonName            :ASN.1 12:'MyName'
Certificate is to be certified until Aug 11 19:58:02 2022 GMT (365 days)
Sign the certificate? [y/n]:y


1 out of 1 certificate requests certified, commit? [y/n]y
Write out database with 1 new entries
Data Base Updated
```

Vous pouvez vérifier que le contenu du fichier data/serial a changé :

```
cat data/serial
```

Cette commande doit afficher :

```
01
```

## Conversion du certificat au format PKCS12

Le format PKCS12 est un format qui contient les paires de clé chiffrées.

Pour convertir le certificat en fichier PKCS12 :

```
openssl pkcs12 -export -clcerts -in /data/users/client.crt -inkey /data/users/client.key -out /data/users/client.p12
```

Vous devez saisir le mot de passe de la clé client puis le mot de passe utilisé pour exporter le certificat client.

La sortie de la commande est :

```
Enter pass phrase for /data/users/client.key:
Enter Export Password:
Verifying - Enter Export Password:
```

Vérifier que le fichier a bien été créé :

```
ls -l data/users
```

CLB ne supportant que le format de certificat PEM, il faut convertir le certificat dans ce format. Nous présentons ici comment convertir le certificat du format DER, P7B ou PFX au format PEM.

## Conversion entre les formats

### Conversion de DER à PEM

Le format DER est généralement utilisé sur les plateformes Java. Les fichiers ont pour extension .der, .cer ou .crt.

Pour convertir le format DER en PEM, exécuter :

```
openssl x509 -inform der -in mycertificate.cer -out mycertificate.pem
```

Pour convertir la clé privée, exécuter :

```
openssl rsa -inform der -outform pem -in myprivatekey.der -out myprivatekey.pem
```

### Conversion de P7B à PEM

Le format P7B est généralement utilisé par les serveurs Windows et Tomcat.

Pour convertir le format P7B en PEM, exécuter :

```
openssl pkcs7 -print_certs -in incertificate.p7b -out outcertificate.cer
```

### Conversion de PFX à PEM

Le format PFX est généralement utilisé par les serveurs Windows.

Pour convertir le certificat du format PFX en PEM, exécuter :

```
openssl pkcs12 -in certname.pfx -nokeys -out cert.pem
```

Pour convertir la clé privée du format PFX en PEM, exécuter :

```
openssl pkcs12 -in certname.pfx -nocerts -out key.pem -nodes
```
