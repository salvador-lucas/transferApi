# December Labs Challenge

### Pre-requisites

- Docker


### First time run
First build the docker container:
```
$ docker-compose build
```
Create the database in mysql

```
$ docker-compose up -d mysqldb
```
Once the mysql service is running, create the database 

```
CREATE DATABASE IF NOT EXISTS transfers;
CREATE DATABASE IF NOT EXISTS transfersTest;
```

After that, start the node server 

```
$ docker-compose up -d app
```

### Available endpoints

```
POST /auth/signup
POST /auth/login

POST /trasnfers/
```