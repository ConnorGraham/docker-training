# Docker Build Stages

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