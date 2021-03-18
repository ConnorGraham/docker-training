# Building Images

### 1. Clone the repo and build the image
```
$ git clone https://github.com/ConnorGraham/docker-training.git
$ docker build -t my-node-app .
$ docker image ls
```

### 2. Create a parent Docker image that sets the Node version for all child images
```
$ echo "FROM node:13" > Dockerfile.parent
$ docker build -t my-parent-image -f Dockerfile.parent .
$ docker image ls
```

### 3. Update Dockerfile to use my-parent-image as its parent
```
Replace "FROM node:15" with "FROM my-parent-image" in Dockerfile
```

### 4. Rebuild my-node-app with a new tag
```
$ docker build -t my-node-app:13 .
$ docker image ls
```

### 5. Verify node version 13 is being used
```
$ docker inspect my-node-app:13 | grep NODE_VERSION
```