# Service
learning sentiment analysis backend service

## Service Architecture:
Node.js backend with MongoDB clsuter

## Service Features:

## Onboarding Checklist / FAQ:
*  [Click here](./CheckList.md)

## Build Steps:
* **swarm mode** - development: `./deploy dev`
* **swarm mode** - production-like: `./deploy`

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
3. `SQL_DB_USERNAME=dbUsername`
4. `SQL_DB_PASSWORD=dbPassword`
5. `SQL_DB_HOST=sqldb`
5. `SQL_DB_PORT=1433` (default)
6. `SQL_DB_NAME=doh`
7. `REDIS_HOST=host`
8. `REDIS_PORT=6379`
9. `MORNING_CRON=pattern`
10. `EVENING_CRON=pattern`
11. `ACCESS_TOKEN=ACCESS_TOKEN`
12. `DB_CONNECTION_TIMEOUT=15000` (default)
13. `DB_REQUEST_TIMEOUT=15000` (default)

## Service Dependencies:
### Upstream
1. Client facing ...

### Downstream
1. MongoDB
2. Redis

## Ports Used:
* **80**

## API
[Postman API Docs]()
