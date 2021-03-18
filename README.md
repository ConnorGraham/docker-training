# docker-training

Use for [Bitovi Docker Training](https://www.bitovi.com/academy/learn-docker.html)

## Cheatsheet
```
# Build an image
docker build -t my-node-app .

# Build an image with a custom tag
docker build -t my-node-app:v1.0.0 .

# List images in registry
docker image ls

# Create a container
docker run --name my-container -p 8000:9000 -d -e PORT=9000 my-node-app:latest

# List running containers
docker ps

# View container logs
docker logs <container-name>

# Kill a container
docker rm -f <container-name>
```
