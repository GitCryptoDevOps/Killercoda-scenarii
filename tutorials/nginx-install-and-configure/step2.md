# Configuring the NGINX Server - HTTPS Virtual Hosts / Load Balancing / IP Access Restrictions

Add the following lines after the server_name configuration line:

```
  ssl_certificate /etc/nginx/ssl/bigstatecollege.edu/server-cert.pem;
  ssl_certificate_key /etc/nginx/ssl/bigstatecollege.edu/server-key.pem;
```{{copy}}

Save and exit.

Validate and reload NGINX:

`nginx -t`{{execute}}

`systemctl reload nginx`{{execute}}

Test the new HTTPS connection. We will need to use the --insecure switch in order to accept the self-signed certificate:

`curl --insecure https://www.bigstatecollege.edu`{{execute}}

We should see Welcome to www.bigstatecollege.edu!.

Congratulations! The virtual host for bigstatecollege.edu is now configured to use HTTPS.

## Configure Load Balancing on the Virtual Host

There's already an upstream group configured in the bigstatecollege.edu virtual host. Remove the backup status from app2 and app3. This will make them live. Edit the bigstatecollege.edu.conf file:

`vi bigstatecollege.edu.conf`{{execute}}

The end result should look like the following:

`upstream bscapp  {
   server app1.bigstatecollege.edu:8085;
   server app2.bigstatecollege.edu:8086;
   server app3.bigstatecollege.edu:8087;
}`{{copy}}

Save and exit.

Test Load Balancing on the Virtual Host
Validate and reload NGINX:

`nginx -t`{{execute}}

`systemctl reload nginx`{{execute}}

Test the new configuration for https://www.bigstatecollege.edu/app:

`curl --insecure https://www.bigstatecollege.edu/app`{{execute}}
``
Reload the command several times. We should see Welcome to app1.bigstatecollege.edu!.

We're going to restrict the bigstatecollege.edu virtual host to the 127.0.0.1 interface. Add the following lines after the listen 443; line in the bigstatecollege.edu.conf file:

`        allow 127.0.0.1;
        deny all;`{{copy}}

Save and exit.

Validate and reload NGINX:

`nginx -t`{{execute}}

`systemctl reload nginx`{{execute}}

Test the new configuration for https://www.bigstatecollege.edu:

`curl --insecure https://www.bigstatecollege.edu`{{execute}}

Access is forbidden via the private IP address. Try to access the virtual host via localhost:

`curl --insecure -H "www.bigstatecollege.edu" https://localhost`{{execute}}

We should see Welcome to www.bigstatecollege.edu!.
