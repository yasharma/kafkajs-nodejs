import { Kafka, Message, Producer } from 'kafkajs';
import config from '../config';
import loggerFactory from '../utils/logging';
const logger = loggerFactory.getLogger('KafkaService');

class KafkaService {
  private _kafka: Kafka;
  private _producer: Producer;
  constructor() {
    this._kafka = new Kafka({
      clientId: config.clientId,
      brokers: config.kafkaBrokers.split(','),
    });
    this._producer = this._kafka.producer();
  }

  async connect() {
    try {
      await this._producer.connect();
      logger.info('Kafka Producer connected');
    } catch (error) {
      logger.error(error);
      await this._producer.disconnect();
    }
  }

  async send(messages: Message[]) {
    await this._producer.send({
      topic: 'KN-V1',
      messages,
    });
  }
}

export default KafkaService;
