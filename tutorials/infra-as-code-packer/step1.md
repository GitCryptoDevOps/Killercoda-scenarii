# Install and Configure MySQL Server (Ubuntu)

MySQL server is one of the most popular and widely-used relational databases. In this Lab, you will be tasked with installing a MySQL server on Ubuntu 18.04 and ensuring that it has been properly secured.

Download the MySQL APT Repository Configuration File from the MySQL APT Repository Download Page:

`wget https://dev.mysql.com/get/mysql-apt-config_0.8.12-1_all.deb`{{execute}}

Install the Downloaded Release Package for the MySQL Server and Re-synchronize the Package Index Files. In the Package Configuration Window, Make Sure that the MySQL Server and Cluster Is Set to mysql-8.0 and the MySQL Tools and Connectors is Enabled.

Use the dpkg package manager to install the release package:

`sudo dpkg -i mysql-apt-config_0.8.12-1_all.deb`{{execute}}

Ensure that the MySQL Server and Cluster is set to mysql-8.0, the MySQL Tools and Connectors is Enabled, and the MySql Preview Packages is Disabled. Then hit Ok:

```
MySQL Server & Cluster (Currently selected: mysql-8.0)
MySQL Tools & Connectors (Currently selected: Enabled)
MySQL Preview Packages (Currently selected: Disabled)
Ok
```

Resynchronize the package index:

`sudo apt update`{{execute}}

Install the MySQL Server and Dependencies Using the apt Command:

`sudo apt install -y mysql-server`{{execute}}

Once prompted enter the following password: `Linux4me!`. Then select `Use Strong Password Encryption (RECOMMENDED)`.

Validate that the MySQL Server is running and that we can log in as the `root` user:

`sudo systemctl status mysql`{{execute}}

Log in to the MySQL server as the root user (enter password when prompted):

`mysql -u root -p`{{execute}}

To log out of the mysql prompt type exit and hit enter.

Run the `mysql_secure_installation` command (enter the `Linux4me!` password when prompted):

`mysql_secure_installation`{{execute}}

Answer the following questions to complete the secure installation:

```
Setup VALIDATE PASSWORD component? y
Set the level of the password validation password to STRONG: 2 
Change the password for root ? n
Remove anonymous users? y
Disallow root login remotely? y
Remove test database and access to it? y
Reload privilege tables now? y
```
