Run a Docker container of InfluxDB:

`docker run -d --name influxdb -p 8086:8086 \
<<<<<<< HEAD
      -v $PWD/influxdb.conf:/etc/influxdb/influxdb.conf \
      -v $PWD/influxdb:/var/lib/influxdb \
      influxdb`{{execute}}
=======
  -v $PWD/influxdb_etc:/etc/influxdb/ \
  -v $PWD/influxdb_lib:/var/lib/influxdb \
  influxdb:1.8`{{execute}}

`docker run -d --name influxdb -p 8086:8086 \
  -e INFLUXDB_DB=my_db \
  -e INFLUXDB_ADMIN_USER=my_user \
  -e INFLUXDB_ADMIN_PASSWORD=my_password \
  -e INFLUXDB_HTTP_AUTH_ENABLED="true" \
  -v $PWD/influxdb_etc:/etc/influxdb/ \
  -v $PWD/influxdb_lib:/var/lib/influxdb \
  influxdb:1.8`{{execute}}

To specify a custom `influxdb.conf` file:
`docker run -d --name influxdb -p 8086:8086 \
  -v $PWD/influxdb.conf:/etc/influxdb/influxdb.conf \
  -v $PWD/influxdb:/var/lib/influxdb \
  influxdb:1.8`{{execute}}
>>>>>>> e4e425b0ccfd6f25b8116ca5cd31608b52484a4f
