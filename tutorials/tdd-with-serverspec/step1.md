# Préparation de l'environnement

Pour fluidifier les cycles de test TDD, créer un alias pour simplifier les opérations :

`alias tdd="bundle exec rspec --color --format documentation"`{{execute}}

Pour créer un environnement ServerSpec, nous devons installer les dépendances `serverspec` et `docker-api` :

Create a `Gemfile` with this content:

```
source 'https://rubygems.org'

group :test do
  gem 'serverspec'
  gem 'docker-api'
end
```{{copy}}

Installer les dépendances avec Bundler :

`bundle install`{{execute}}

Vérifier que tout est bien installé :

`tdd`{{execute}}

Maintenant, créer un squelette de fichier de test. Il se trouve dans le sous-répertoire `spec` :

`mkdir spec`{{execute}}

Create a `spec/Dockerfile_spec.rb` file with this content:

```
# Spécify the required libraries
require "serverspec"
require "docker"

describe "Docker image with apache2" do
  before(:all) do
    @image = Docker::Image.build_from_dir('.')
    set :os, family: :debian
    set :backend, :docker
    set :docker_image, @image.id
  end
  
  # Tests are inserted here
end
```
