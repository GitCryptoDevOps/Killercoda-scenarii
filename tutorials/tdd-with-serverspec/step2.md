# TDD approach to create a Docker image

Maintenant, démarrer une démarche TDD pour créer une image Docker Debian 10 installant le serveur Web Apache2.

Ajouter dans le fichier `spec/Dockerfile_spec.rb` :

```
describe "Build a Docker image with apache2" do
  def debian_version
    command("cat /etc/debian_version").stdout
  end
  it "installs Debian 10" do
    expect(debian_version).to include("10.")
  end
end
```{{copy}}

Lancer les tests :

`tdd`{{execute}}

Les tests échouent.

Implémentons le code dans le fichier `Dockerfile` pour rendre passant le test.

Create the `Dockerfile` file:

`vi Dockerfile`{{execute}}

Add this content:

```
FROM debian
```{{copy}}

Lancer les tests :

`tdd`{{execute}}

Cette fois, les tests réussissent.

Maintenant, installer le package `apache2`. Pour cela, ajouter au fichier `spec/Dockerfile_spec.rb` :

`vi spec/Dockerfile_spec.rb`{{execute}}

this content:

```
  describe package('apache2') do
    it { should be_installed }
  end
```{{copy}}

Lancer les tests :

`tdd`{{execute}}

Les tests échouent.

Add to the Dockerfile file:

```
RUN apt update && apt install apache2 -y
```{{copy}}

Lancer à nouveau les tests :

`tdd`{{execute}}

Cette fois, les tests réussissent.
