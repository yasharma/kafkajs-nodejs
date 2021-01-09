FROM node:10.16.3-alpine
RUN apk --update add curl
RUN apk --no-cache add bash g++ ca-certificates lz4-dev musl-dev cyrus-sasl-dev openssl-dev make python
RUN apk add --no-cache --virtual .build-deps gcc zlib-dev libc-dev bsd-compat-headers py-setuptools bash
RUN apk add tzdata
ENV TZ=Asia/Dubai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# RUN npm install node-rdkafka@2.7.1-2

LABEL authors="Yash Sharma <yash@saal.ai>"

RUN mkdir /app
WORKDIR /app

COPY ["./package.json", "tsconfig.json", "./"]
RUN npm install

COPY src ./src
RUN npm run build

EXPOSE  80

CMD ["node", "dist"]
