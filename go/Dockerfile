FROM golang:1.24 AS build

WORKDIR /app
COPY ./go.mod ./go.sum ./

RUN go mod tidy
RUN go mod download

COPY *.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -v -o app

FROM alpine:latest AS run

WORKDIR /app

COPY --from=build /app/app ./
EXPOSE 8080

CMD ["/app/app"]