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
$ docker-compose up mysqldb
```
Once the mysql service is running, create the database 

```
CREATE DATABASE IF NOT EXISTS transfers;
```

```
$ docker-compose up app
```

### Available endpoints

```
POST /auth/signup
POST /auth/login

POST /trasnfers/
```