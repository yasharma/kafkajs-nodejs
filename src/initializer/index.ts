import loggerFactory from '../utils/logging';
const logger = loggerFactory.getLogger('DbClient');
import { MongoClient, Db } from 'mongodb';
import config from '../config';
let _dbClient: Db;

export const setupDB = async () => {
  try {
    if (!_dbClient) {
      const _dbConnection = await MongoClient.connect(
        config.mongoDbUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
      );
      _dbClient = _dbConnection.db();
      // _dbClient.collection('sasa').createIndex
      logger.info('Database is ready...');
    }
  } catch (err) {
    logger.error('Failed to Initialize the socket:', err);
    throw err;
  }
};

export const getMongoClient = () => {
  return _dbClient;
};
