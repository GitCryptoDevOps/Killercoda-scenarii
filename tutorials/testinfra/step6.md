## TDD

A web server needs to be installed and configured to run on port 80 to serve a static landing page.

`apt install nginx`{{execute}}

`cat test_webserver.py`{{execute}}

`pytest -q --hosts='ssh://node4' test_webserver.py`{{execute}}

- `-q`: Reduce the verbosity in pytest output to concentrate on failures

`cat test_webserver2.py`{{execute}}

`pytest -q --hosts='ssh://node4' test_webserver2.py`{{execute}}

=> fails

`systemctl start nginx`{{execute}}

`pytest -q --hosts='ssh://node4' test_webserver2.py`{{execute}}

`cat test_webserver3.py`{{execute}}

`pytest -q --hosts='ssh://node4' test_webserver3.py`{{execute}}

Nginx listens on port 8080:

`grep "listen 8080" /etc/nginx/sites-available/default`{{execute}}

Change the port in the /etc/nginx/sites-available/default file.

`systemctl restart nginx`{{execute}}

`pytest -q --hosts='ssh://node4' test_webserver3.py`{{execute}}

Test the output of the webserver:

`cat test_webserver4.py`{{execute}}

`pytest -q --hosts='ssh://node4' test_webserver4.py`{{execute}}
