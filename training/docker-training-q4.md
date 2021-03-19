# Docker Build Stages

### Build prod and dev images
```
# Build our prod image
docker build -t my-node-app:prod --target=prod .

# Build our dev image
docker build -t my-node-app:dev --target=dev .

# Compare the results
$ docker image ls my-node-app
```

### Run prod and dev container
```
# Start Dev image
$ docker run --name my-dev-container -p 8000:8000 -d -v "$(pwd)"/src:/app/src my-node-app:dev
b67e760ef59c2c42c2737720031537f169302513b37b4b97478c8f21e59791bb

# Start Prod image
$ docker run --name my-prod-container -p 9000:8000 -d -v "$(pwd)"/src:/app/src my-node-app:prod
200d00aafb79ed371428c9f647e5f7ef2ad9d2ddd3281587401a6fc6267c0101

# Test Dev container
$ curl localhost:8000
Hello World!

# Test Prod container
$ curl localhost:9000
Hello World!

# Make a change

# Test Dev container
$ curl localhost:8000
Hello Change!

# Test Prod container
$ curl localhost:9000
Hello World!

# Kill our containers
docker rm -f my-dev-container my-prod-container
```

### Challenge: Add a new stage to the Dockerfile called "test" so that running the image will run our unit tests
```
$ docker build -t my-image:test --target=test .
$ docker run my-image:test

> docker-training@1.0.0 test
> mocha

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (4ms)
```

### HINT: tests can be run outside of Docker with npm test
```
$ npm test

> docker-training@1.0.0 test /Users/connor/git/docker-training
> mocha

  Array
    #indexOf()
      ✓ should return -1 when the value is not present

  1 passing (5ms)
```