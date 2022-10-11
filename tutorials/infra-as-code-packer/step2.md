## Connect to This MariaDB Database on Linux

You are working as a System Administrator and have been tasked with querying a running MariaDB instance. You will need to run two queries; find the name of the user with ID 3 and the ID of the user with the name "David".

Connect to the database.

As this database is behind a firewall, you must first connect to the server using ssh.

After connected to the server via ssh, you can connect using the mysql client.

`sudo mysql -h localhost -u root demo`{{execute}}

Print the name of the user with ID 3:

`select name from users where ID = 3;`{{execute}}

Print the ID of the user named "David":

`select ID from users where name = 'David';`{{execute}}
