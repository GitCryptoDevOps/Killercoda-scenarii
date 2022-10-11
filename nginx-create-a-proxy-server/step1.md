NGINX is one of the tools that the modern web is built upon. In this activity, we will deploy NGINX as an HTTP server, with a single virtual host, for serving a static content. The initial deployment of NGINX on a new server is the first step in mastering the use of this powerful tool.

As system administrators with our organization, we've been tasked with setting up a new web server to serve static web assets. Our organization mandates the use of CentOS 7 for all new servers, and we've decided to deploy the newest stable build of NGINX from the official NGINX repository.

After we've installed NGINX, we'll need to ensure that it's running and will run automatically after a reboot. Finally, we must configure the server to handle requests for assets.example.com from the directory /var/www/assets.example.com/. Once we've tested the configuration, we're ready to notify the web developers in our organization.

We need to install NGINX from the official repository, so we will have to set that up on our server. Create an edit a new file:

`vi /etc/yum.repos.d/nginx.repo`{{execute}}

with the following content:

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch
gpgcheck=0
enabled=1
```

Now we've got to run an update (typing n when prompted for a tzdata install) , and then install NGINX:

`yum update`{{execute}}
`yum install nginx`{{execute}}

The information that pops up here, before the y/d/N prompt, will show where we're getting the package. Make sure we're pulling it from the new nginx repository we set up, and hit y to move forward with the install.
