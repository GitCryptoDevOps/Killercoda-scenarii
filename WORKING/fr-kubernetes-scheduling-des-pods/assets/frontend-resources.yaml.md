apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: db
    image: mysql
    env:
    - name: MYSQL_ROOT_PASSWORD
      value: "password"
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limites:
        memory: "128Mi"
        cpu: "500m"
  - name: wd
    image: wordpress
    resources:
    requests:
      memory: "64Mi"
      cpu: "250m"
    limites:
      memory: "128Mi"
      cpu: "500m"
