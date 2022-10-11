# Démarche TDD pour créer le conteneur Docker à partir de l'image créée

Maintenant, démarrons l'interaction TDD pour créer le conteneur Docker à partir de l'image créée.

Add to the `spec/Dockerfile_spec.rb` file:

```
  describe 'Creates a container' do
    before(:all) do
      @container = Docker::Container.create('Image' => @image.id)
      @container.start
    end
    
    # Verify the apache2 process is running
    describe process("apache2") do
      it { should be_running }
    end 
    
    # Clean the container
    after(:all) do
      @container.kill
      @container.delete(:force => true)
    end
  end
```{{copy}}

Le bloc `before` crée et démarre le conteneur Docker et est exécuté avant le début des tests; le bloc `after` arrête et supprime le conteneur Docker ainsi créé et est exécuté après la fin des tests.

Lancer les tests:

`tdd`{{execute}}

Les tests échouent.

Pour implémenter le code, ajouter au fichier `Dockerfile` :

```
CMD apachectl -D FOREGROUND
```{{copy}}

Logiquement, nous aurions du utiliser `CMD service apache2 start`. Mais dans ce cas, le processus de commande CMD serait détaché du shell dès qu'il serait exécuté, provoquant la fin du conteneur Docker. Comme Docker nécessite que le processus soit actif, Apache est exécuté en avant-plan.

Lancer à nouveau les tests :

`tdd`{{execute}}

Cette fois, les tests réussissent.
