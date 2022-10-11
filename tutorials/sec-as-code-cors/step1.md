La politique de même origine des navigateurs empêche une requête d'API de s'exécuter à partir d'autre part que l'application Web. C'est une bonne protection mais cette limitation pose parfois des problèmes.

CORS (Cross-Origin Resource Sharing) offre un moyen de contourner cette restriction en laissant votre serveur spécifier les types de demandes autorisés, prenant le contrôle sur qui peut accéder aux différentes parties de l'API.

CORS utilise des en-têtes HTTP pour demander au navigateur Web de permettre au serveur web tournant à un endroit (on parle d'origine) d'accéder à des ressources se trouvant autre part, c'est-à-dire un domaine, un protocole ou i, port différent. Pour cela, une requête HTTP "cross-origin" est exécutée.

Une requête CORS est une requête XMLHttpRequest ou un appel d'API entre deux sites. Par exemple :
- les fonts Web,
- les textures WebGL,
- les images et les vidéos,
- les feuilles de style HTML,
- les scripts.

Une requête "pre-flight" (requête préliminaire) consiste à envoyer d'abord une requête HTTP avec la méthode OPTIONS afin de déterminer quelle requête peut être envoyée de façon sécurisée. Cela peut être fait pour les méthodes suivantes :
- CONNECT,
- DELETE,
- OPTIONS,
- PATCH,
- PUT,
- TRACE.

CORS utilise les en-têtes suivantes :

- Origin;
- Access-Control-Allow-Credentials (facultatif) : indique que les cookies doivent être inclus dans la requête CORS;
- Access-Control-Allow-Headers (obligatoire) : indique les entêtes HTTP, séparée par des virgules, acceptés par le serveur sur une URL; pour prendre en charge toutes les entêtes, retourner la valeur de l'entête HTTP Access-Control-Request-Headers;
- Access-Control-Allow-Methods (obligatoire) : liste les méthodes HTTP autorisées prises en charge par le serveur (HEAD, OPTIONS, GET, POST, PUT, PATCH ou DELETE);
- Access-Control-Allow-Origin (obligatoire) : indique si la réponse peut être partagée avec un autre hôte; utiliser une liste blanche pour n'autoriser que certaines origines (* pour autoriser les demandes de toutes les origines);
- Access-Control-Expose-Headers (facultatif) : indique les entêtes, séparées par des virgules, de réponse à exposer aux clients;
- Access-Control-Max-Age (facultatif) : indique le nombre de secondes de mise en cache des requêtes de contrôle en amont; les navigateurs peuvent avoir leurs propres plafonds maxAge;
- Access-Control-Request-Headers;
- Access-Control-Request-Method.

## L’API

Dans cet article, nous mettant en oeuvre la protection CORS avec NodeJS dans un serveur Web (app.js) se composant d'un serveur exposant :
- une page HTML (client.html) qui interroge l'API pour obtenir les contacts puis les afficher;
- un endpoint d'API (/contacts) qui renvoie les contacts au format JSON.

Créer le serveur Web :

`cat app.js`{{execute}}

Lancer le serveur :

`node app.js`{{execute}}

Vérifier que le serveur tourne :

`curl http://127.0.0.1:1111/contacts`{{execute}}

Créer un fichier client.html qui envoie une requête HTTP à /contacts :

`cat client.html`{{execute}}

Pour créer une requête CORS, modifier l’origine de l’appel. Pour cela, créer un second serveur sur le port 6666 qui envoie des requêtes à l'API sur 127.0.0.1:5555.

Arrêter le serveur NodeJS en pressant ctrl-C.

Ajouter à la fin au fichier `app.js` :

```
var CLIENT_PORT = 5555;

var client = express();
client.use(express.static(__dirname));
client.listen(CLIENT_PORT, function() {
  console.log('Client started');
});
```{{copy}}

Redémarrer le serveur :

`node app.js`{{execute}}

Dans un navigateur Web, visiter la page http://127.0.0.1:5555/client.html. La console Javascript du navigateur afficher l'erreur suivante :

```
Access to XMLHttpRequest at 'http://127.0.0.1:1111/contacts' from origin 'http://127.0.0.1:5555' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
VM22:1 GET http://127.0.0.1:1111/contacts net::ERR_FAILED
(anonymous) @ VM22:1
getData @ client.html:25
onload @ client.html:3
```

En effet, l’appel à l’API REST se fait maintenant depuis une autre origine, un autre serveur Web. La protection CORS interdit cela.

Concrètement, le client ("le navigateur") :
- ajoute des informations supplémentaires à la requête afin que le serveur puisse identifier le client;
- interprète la réponse du serveur et décide d’envoyer la requête au client ou de renvoyer une erreur.

Le flux des requêtes CORS est décrit ci-dessous :
- Le client (c'est-à-dire le code Javascript de la page client.html) initie une requête.
- Le navigateur Web ajoute l'entête HTTP Origin :

```
GET /contacts HTTP/1.1
Host: 127.0.0.1:9999
...
Origin: http://localhost:1111
```

- Il transmet le tout au serveur.
- Le serveur traite la requête et retourne sa réponse en ajoutant l'entête HTTP Access-Control-Allow-Origin avec pour valeur :
  - un client spécifique (http://localhost:5555) ou
  - `*` pour indiquer que n'importe quel client peut accéder à cette ressource.

```
HTTP/1.1 200 OK
...
Access-Control-Allow-Origin: *
```

- Le navigateur décide si le client Javascript doit avoir accès à la réponse :
  - Dans l'affirmative, il transmet la réponse au client.
  - Dans le cas contraire, il renvoie l'erreur qui nous avons obtenue.

Si l’une de ces entêtes manque, la requête CORS échoue.

A savoir, la console du navigateur Web masque :
- les informations de la réponse en cas d'échec;
- les entêtes des réponses HTTP dans tous les cas.

L'entête Origin permet au client de s'identifier auprès du serveur. Il définit où se trouve la ressource client (dans notre cas http://localhost:5555).

Si l'origine du client ne peut pas être déterminée, on utilise la valeur null. Cela arrive par exemple lors de l'ouverture d'un fichier dans un navigateur.

Lorsqu'une origine fait référence :
- au client qui fait la demande, on parle d’origine du client;
- à l'URL recevant la requête, on parle d’origine du serveur.

On parle de requête de même origine lorsque l'origine du client et l'origine du serveur sont les mêmes. Sinon, on parle de requête d'origine croisée; dans ce cas, le navigateur utilise CORS pour déterminer comment gérer la demande.

Il existe une particularité notoire à ce mécanisme. Certains navigateurs (comme Chrome et Safari) peuvent parfois avoir un entête Origin avec les requêtes non GET de même origine. Dans ces cas, l’entête Origin a la même valeur que la valeur d’origine du serveur. Vérifier que l’entête Origin existe ne suffit donc pas, il faut aussi vérifier que l'origine du client est différente de l'origine du serveur.

Dans notre cas, nous choisissons d'ajouter l'entête HTTP Access-Control-Allow-Origin: * à chaque réponse. Pour cela, ajouter au code du serveur :
- la fonction handleCors :

```
function handleCors (req, res, next) {
  res.set(‘Access-Control-Allow-Origin', ‘*’);
  next();
};
```

- l'activation de ce mécanisme :

```
server.use(handleCors);
```

Créer le serveur Web avec l'autorisation de toutes les origines :

`cat app2.js`{{execute}}

La fonction handleCors ajoute un en-tête Access-Control-Allow-Origin à la réponse puis appelle next() pour continuer le traitement de la demande.

Redémarrer le serveur :

`node app2.js`{{execute}}

Dans un navigateur, aller à l’adresse http://localhost:1111/client.html

Les contacts sont maintenant affichés.

Vérifier avec la console que les deux entêtes sont bien présentes.

`Access-Control-Allow-Origin` ne peut accorder des autorisations qu'à une seule origine à la fois. Si `Access-Control-Allow-Origin` n'est pas `*` ou ne correspond pas exactement à l'en-tête `Origin`, le navigateur rejette la demande.
