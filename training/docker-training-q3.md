# Bind Mounts

### 1. Pull the latest code changes and rebuild
```
git pull
docker build -t my-image .
```

### 2. Run the container using bind mounts
```
$ docker run --name my-container -p 8080:8080 -d -v $(PWD):/app my-image
$ curl localhost:8080/
```

### 3. Make a change to src/index.js
```
# Change index.js
$ docker logs my-container 
$ curl localhost:8080/
```

### 4. Shell in to container and look around!
```
docker exec -it my-container bash
```