## Start and Enable NGINX Service

We can start the service right now with a systemctl start nginx, and then set it to start automatically after a server reboot with systemctl enable nginx.

## Serve Content From /var/www/assets.example.com For Requests To assets.example.com

Now we can create our first virtual host. We've got to create :

`vi conf.d/assets.example.com.conf`{{execute}}

It will configure NGINX to serve out static content for the assets.example.com domain. The contents of that file should be:

```
server {
    listen 80;
    server_name assets.example.com
    root /var/www/assets.example.com
}
```

Save that file out, and then test our configuration with nginx -t. Everything in the output should be ok and successful. To reload our NGINX server (so that it sees the new configuration file we created), we also need to run systemctl reload nginx.

## Testing

We can test with a couple of different methods. One is to just look at what's in our content directory:

`ls /var/www/assets.example.com`{{execute}}

Another way is with curl. Let's run this:

`curl --header "Host: assets.example.com" localhost/test.txt`{{execute}}

This should print out the contents of that file, TEST PASSED.

We started with a CentOS 7 server, got the newest stable version of NGINX installed on it (using the official NGINX repository) and were able to set up a virtual host that serves out static content (test.txt). We are finished. Congratulations!
