# Docker Compose

### Challenge: Configure the my-app service to connect to a mysql service

### 1. Add a MySQL service to docker-compose.yml
```
  db:
     image: mysql:5.7
     environment:
       MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
       MYSQL_DATABASE: ${MYSQL_DATABASE}
       MYSQL_USER: ${MYSQL_USER}
       MYSQL_PASSWORD: ${MYSQL_PASSWORD}
```

### 2. Set my-app environment variables to connect to the db service
```
???
```
HINT: `DB_HOST` should equal `db`

### 3. Test
```
$ docker-compose up -d

$ curl localhost:9000/db
Connected!
```