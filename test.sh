#!/usr/bin/env bash
docker build . -t kafkajs-nodejs-test:latest -f dev.Dockerfile

docker run                  \
    --rm                    \
    --name=kafkajs-nodejs-test  \
    --env "PORT=8099" \
    --env "MONGO_DB_URL=mongourl" \
    -v "${PWD}":/user \
    -w "/user"  \
    kafkajs-nodejs-test:latest  \
    npm run test
