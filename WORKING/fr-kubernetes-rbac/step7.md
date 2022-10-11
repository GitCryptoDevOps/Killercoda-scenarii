## Gestion des contextes de sécurité

Un contexte de sécurité définit la configuration de privilège et de contrôle d'accès pour les pods ou les conteneurs, par exemple :
- les UID et GID basés sur le Discretionary Access Control,
- les labels de sécurité SELinux,
- les capacités de Linux,
- AppArmor,
- Seccomp,
- la configuration AllowPrivilegeEscalation,
- la configuration runAsNonRoot.

Le contexte de sécurité peut être sélectionné au niveau :
- du Pod,

`kubectl explain pod.spec.securityContext`

- du conteneur.

`kubectl explain pod.spec.containers.securityContext`

La configuration appliquée au niveau du conteneur écrase la configuration appliquée au niveau du Pod.

security-context.yaml:
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 2000
  volumes:
  - name: securevol
    emptyDir: {}
  containers:
  - name: sec-demo
    image: busybox
    command: ["sh", "-c", "sleep 3600"]
    volumeMounts:
    - name: securevol
      mountPath: /data/demo
    securityContext:
      allowPrivilegeEscalation: false

kubectl apply -f security-context.yaml
kubectl get pods
kubectl exec -it security-context.yaml -- sh
ps
cd /data
ls -l
id
=> 1000, 1000, 2000
exit
