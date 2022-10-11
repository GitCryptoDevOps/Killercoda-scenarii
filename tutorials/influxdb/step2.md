Afficher la version d'InfluxDB:

`influx --version`{{execute}}

To create a configuration file:

`influxd config > /etc/influxdb/influxdb.conf`{{execute}}

Then you can update the configuration.

After, you have to reload the configuration file:

`influxd -config /etc/influxdb/influxdb.conf`{{execute}}
