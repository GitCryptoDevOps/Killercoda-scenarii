# Install Nginx

NGINX is one of the tools that the modern web is built upon. In this activity, we will deploy NGINX as an HTTP server, with a single virtual host, for serving a static content. The initial deployment of NGINX on a new server is the first step in mastering the use of this powerful tool.

As system administrators with our organization, we've been tasked with setting up a new web server to serve static web assets. Our organization mandates the use of CentOS 7 for all new servers, and we've decided to deploy the newest stable build of NGINX from the official NGINX repository.

After we've installed NGINX, we'll need to ensure that it's running and will run automatically after a reboot. Finally, we must configure the server to handle requests for assets.example.com from the directory /var/www/assets.example.com/. Once we've tested the configuration, we're ready to notify the web developers in our organization.

`apt update`{{execute}}

`apt install -y nginx`{{execute}}

We can start the service right now with a systemctl start nginx, and then set it to start automatically after a server reboot with systemctl enable nginx.

`systemctl start nginx`{{execute}}

Now we can create our first virtual host. We've got to create and edit conf.d/assets.example.com.conf, which will configure NGINX to serve out static content for the assets.example.com domain. The contents of that file should be:

`vi /etc/nginx/conf.d/example.com.conf`{{execute}}

`server {
  listen 80;
  server_name example.com;
  root /var/www/example.com;
}`{{copy}}

Save that file out, and then test our configuration:

`nginx -t`{{execute}}

Everything in the output should be ok and successful. To reload our NGINX server (so that it sees the new configuration file we created), we also need to run:

`systemctl reload nginx`{{execute}}

Create a HTML page:

`mkdir /var/www/example.com`{{execute}}

`ls /var/www/example.com`{{execute}}

`vi /var/www/example.com/test.html`{{execute}}

```<html>
<body>
<p>Test!</p>
</body>
</html>```{{copy}}

`curl --header "Host: example.com" 0.0.0.0/test.html`{{execute}}

This should print out the contents of that file.
