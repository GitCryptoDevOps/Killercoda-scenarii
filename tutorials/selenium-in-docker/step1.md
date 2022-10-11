# Docker et les tests Selenium

Il est possible d'afficher sur votre écran l'interface utilisateur des applications qui tournent dans un conteneur Docker.

Pour cela, utilisez xvfb et le serveur de socket X11.

Tout d'abord, vérifions que le socket Unix utilisé par le serveur X11 tourne bien dans le répertoire attendu :

`ls /tmp/.X11-unix/`{{execute}}

Nous allons monter le socket Unix utilisé par X11 comme volume dans le conteneur.

Ensuite, vérifions la valeur de la variable d'environneemnt que les applications utilisent pour trouver le socket X11 :

`echo $DISPLAY`{{execute}}

Nous allons également spécifier l'affichage à utiliser.

Pour éviter qu'un conteneur Docker ne puisse prendre le contrôle sur votre affichage et enregistrement vos saisies au clavier, Docker interdit les connexions à votre hôte depuis les conteneurs.

X11 peut authentifier un conteneur de plusieurs manières :
- via le fichier .Xauthority,
- désactiver le contrôle d'accès à X.

## Méthode du fichier .Xauthority

Cette technique repose sur l'utilisation du fichier .Xauthority.

Ce fichier contient les noms d'hôte avec un "cookie secret" que chaque hôte doit utiliser pour se connecter.

L'idée est de donner au conteneur le même nom que le nom d'hôte de votre machine.

`ls $HOME/.Xauthority`{{execute}}

```
docker run \
    -e DISPLAY=$DISPLAY \
    --hostname=$HOSTNAME \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -v $HOME/.Xauthority:/root/.Xauthority \
    -it \
    ubuntu:14.04 \
    bash
```{{execute}}

## Méthode de la désactivation du contrôle d'accès à X

Cette technique consiste à désactiver le contrôle d'accès à X grâce à cette commande :

`xhost +`{{execute}}

Une fois que vous aurez terminé votre travail, réactivez le contrôle d'accès à X avec la commande xhost -.

L'inconvénient est que l'on désactive toutes les protections mises à place par X11.

Le conteneur peut maintenant se connecter à n'importe quel hôte :

```
docker run \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -it \
    ubuntu:14.04 \
    bash
```{{execute}}

Vérifions que tout fonctionne correctement :

`apt-get update && apt-get install -y x11-apps`{{execute}}

`xeyes`{{execute}}

L'application xeyes est une petite application qui font suivre votre souris par des yeux.

L'application est réellement intégrée dans une fenêtre.

## Utilisation de Selenium

Selenium permet d'automatiser des actions du navigateur. Il nécessite l'utilisateur d'u navigateur pour tourner.

Nous allons utiliser Pyhton pour le piloter.

`apt-get install -y python2.7 python-pip firefox`{{execute}}

`pip install selenium`{{execute}}

`python`{{execute}}

Voici un exemple de code Python pilotant Selenium :

```
from selenium import webdriver
b = webdriver.Firefox()
b.get('http://github.com')
searchselector = '.js-site-search-form input[type="text"]'
searchbox = b.find_element_by_css_selector(searchselector)
searchbox.send_keys('docker-in-practice\n')
usersxpath = '//nav//a[contains(text(), "Users")]'
userslink = b.find_element_by_xpath(usersxpath)
userslink.click()
dlinkselector = '.user-list-info a'
dlink = b.find_elements_by_css_selector(dlinkselector)[0]
dlink.click()
mlinkselector = '.org-header a.meta-link'
mlink = b.find_element_by_css_selector(mlinkselector)
mlink.click()
```

Vous voyez dans une fenêtre sur votre ordinateur les commandes Python exécutée dans le conteneur.

Quittons Python :

`exit()`{{execute}}

## Intégration dans la CI

Dans le cas d'un pipeline de CI, vous ne pouvez pas utiliser le montage de socket de serveur X.

La solution est d'installer un serveur X, par exemple avec xvfb.

Installons xvfb :

`apt-get install -y xvfb`{{execute}}

`exit`{{execute}}

Faisons un commit du container et créons un tag selenium de cette image :

`docker commit ef351febcee4 selenium`{{execute}}

Créons un script Python myscript.py utilisant Selenium :

```
from selenium import webdriver
b = webdriver.Firefox()
print 'Visiting github'
b.get('http://github.com')
print 'Performing search'
searchselector = '.js-site-search-form input[type="text"]'
searchbox = b.find_element_by_css_selector(searchselector)
searchbox.send_keys('docker-in-practice\n')

print 'Switching to user search'
usersxpath = '//nav//a[contains(text(), "Users")]'
userslink = b.find_element_by_xpath(usersxpath)
userslink.click()
print 'Opening docker in practice user page'
dlinkselector = '.user-list-info a'
dlink = b.find_elements_by_css_selector(dlinkselector)[99]
dlink.click()
print 'Visiting docker in practice site'
mlinkselector = '.org-header a.meta-link'
mlink = b.find_element_by_css_selector(mlinkselector)
mlink.click()
print 'Done!'
```

Cette fois, la variable dlink est utilisée pour produire une erreur. En cas d'erreur, un statut différent de zéro est retourné dans le pipeline de CI.

```
docker run \
    --rm \
    -v $(pwd):/mnt \
    selenium sh -c "xvfb-run -s '-screen 0 1024x768x24 -extension RANDR' python /mnt/myscript.py"
echo $?
```{{execute}}
