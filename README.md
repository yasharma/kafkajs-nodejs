# Service
Nodejs kafak mongodb service

## Service Architecture:
Node.js backend with MongoDB clsuter

## Start Steps:
* development: `./start.sh`

## Run Tests:
./test.sh

## Healthcheck:

1.  Endpoint: `/healthcheck`
2.  Expected HTTP Response Code: **200**

## SmokeTest:
1.  Endpoint: `/healthcheck`
2.  Expected HTTP Response Code: **200**

## Service Logging:

1.  Log Levels supported: **trace, debug, info, warn, error, fatal**
2.  Default Loglevel: **debug**
3.  Log Formats supported: **Log4js**

## Environment Variables:

**(Required)**

1. `NODE_ENV=production` 
2. `LOGGER_CONFIG={"disableClustering":true,"appenders":{"out":{"type":"stdout","layout":{"type":"pattern","pattern":"%[ [%d] [%p] %] %c - %x{correlationId} - %m"}}},"categories":{"default":{"appenders":["out"],"level":"trace"}}}`
3. `KAFKA_BROKERS=[kafka:9092]`

## Service Dependencies:
### Upstream
1. Client facing ...

### Downstream
1. MongoDB
2. Kafak

## Ports Used:
* **80**

## API
`POST - /produce-event`

Request Body:
```json
{
    "messages": [
        {
            "body": "Hello message 1"
        },
        {
            "body": "Kafak message 2"
        }
    ]
}
```