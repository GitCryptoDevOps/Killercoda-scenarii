Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Les sondes `livenessProbe` permettent de déterminer quand redémarrer un conteneur.

Les sondes `readinessProbe` permettent de déterminer si un pod doit recevoir du trafic.

Pour cela, le développeur doit exposer une URL que Kubernetes utilise pour savoir si le conteneur est en bonne santé ou non.
