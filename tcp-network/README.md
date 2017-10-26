# Tcp network

Simple tcp network written in Go, and packaged in Docker containers.

## Commands to remember

### Docker build

`docker build -t user_name/service_name .`

### Docker run

`docker run --name container_name -p xxxx:xxxx user_name/service_name`, where _xxxx:xxxx_ is ports (first one exposed, second one internal).

### Docker compose

`docker-compose up --build`, where _--build_ makes sure to build all files again.

### Docker remove images

`docker rmi <image>`.

### Docker remove container

`docker rm <container>`

## TODO

### Add os.Exit(0) to server when all clients exited?