FROM golang:jessie

# Set the working directory to /app
WORKDIR /src

# Copy the current directory contents into the container at /app
COPY ./tcp-server.go /src/tcp-server.go

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run app.py when the container launches
RUN go build /src/tcp-server.go
ENTRYPOINT ./tcp-server