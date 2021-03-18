# Bind Mounts

### 1. Pull the latest code changes and rebuild
```
git pull
docker build -t my-node-app .
```

### 2. Run the container using bind mounts
```
$ docker run --name my-container -p 8000:8000 -d -v $(PWD):/app my-node-app
$ curl localhost:8000/
```

### 3. Make a change to src/index.js
```
# Change index.js
$ docker logs my-container 
$ curl localhost:8000/
```

### 4. Shell in to container and look around!
```
docker exec -it my-container bash
```