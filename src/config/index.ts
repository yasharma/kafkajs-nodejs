import loggerFactory from '../utils/logging';
import { Role } from '../models/Role';
const logger = loggerFactory.getLogger('Config');
interface IConfig {
  port: number;
  production: boolean;
  authorizedRole: string[];
  mongoDbUri: string;
  kafkaBrokers: string;
  clientId: string;
}
const config: IConfig = <IConfig>{
  port: 80,
  production: false,
  authorizedRole: [Role.root],
  clientId: 'kafkajs-nodejs-mongo-app',
};

if (process.env.PORT) config.port = parseInt(process.env.PORT);
if (process.env.NODE_ENV) config.production = process.env.NODE_ENV === 'production';

if (process.env.MONGO_DB_URL) {
  config.mongoDbUri = process.env.MONGO_DB_URL;
} else {
  logger.error('Missing parameter: MONGO_DB_URL! Exiting...');
  process.exit(1);
}

if (process.env.KAFKA_BROKERS) {
  config.kafkaBrokers = process.env.KAFKA_BROKERS;
} else {
  logger.error('Missing parameter: KAFKA_BROKERS! Exiting...');
  process.exit(1);
}

if (process.env.CLIENT_ID) {
  config.clientId = process.env.CLIENT_ID;
} else {
  logger.warn(`Missing parameter: CLIENT_ID! setting default (${config.clientId})`);
}

logger.info('Config for the app: %o', config);

export default config;
