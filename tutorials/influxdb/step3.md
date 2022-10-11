Create a database to log the events:

`influx -execute 'CREATE DATABASE events'`{{execute}}

Show databases:

`curl http://localhost:8086/query --data-urlencode "q=SHOW DATABASES"`{{execute}}
