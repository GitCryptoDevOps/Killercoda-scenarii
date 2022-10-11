Artifactory (pas retenu par manque de mémoire mmap):

`docker pull docker.bintray.io/jfrog/artifactory-oss:latest`{{execute}}

`docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss:latest`{{execute}}

To Managing Data Persistence :

`docker run --name artifactory-oss -d -v /var/opt/jfrog/artifactory:/var/opt/jfrog/artifactory -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss:latest`{{execute}}

`http://SERVER_DOMAIN:8081/artifactory`

=> Artifactory : `http://188.166.20.32:8081/artifactory`

`docker run --name artifactory-oss -v /var/opt/jfrog/artifactory:/var/opt/jfrog/artifactory -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss:latest`{{execute}}
