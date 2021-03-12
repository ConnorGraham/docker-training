# Customizing containers

### 1. Pull the latest code changes and rebuild
```
$ git pull
$ docker build -t my-image .
```

### 2. Run the container using port-forwarding
```
$ docker run --name my-container -p 8000:8000 -d my-image
$ curl localhost:8000/
$ docker logs my-container 
$ docker rm -f my-container
```

### 3. Run the container and customize PORT
```
$ docker run --name my-container -p 9090:9090 -d -e PORT=9090  my-image
$ curl localhost:9090/
$ docker logs my-container 
$ docker rm -f my-container
```

### 4. Rebuild image with PORT build-arg
```
$ docker build --build-arg PORT=9090 -t my-image .
$ docker run --name my-container -p 9090:9090 -d my-image
$ docker logs my-container
$ docker rm -f my-container
```