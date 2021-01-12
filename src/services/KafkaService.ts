import { Consumer, Kafka, Message, Producer } from 'kafkajs';
import config from '../config';
import loggerFactory from '../utils/logging';
const logger = loggerFactory.getLogger('KafkaService');

class KafkaService {
  private _kafka: Kafka;
  private _producer: Producer;
  private _consumer: Consumer;
  constructor() {
    this._kafka = new Kafka({
      clientId: config.clientId,
      brokers: config.kafkaBrokers.split(','),
    });
    this._producer = this._kafka.producer();
    this._consumer = this._kafka.consumer({ groupId: 'my-group-v1' });
  }

  async connectProducer() {
    try {
      await this._producer.connect();
      logger.info('Kafka Producer connected');
    } catch (error) {
      logger.error(error);
      await this._producer.disconnect();
    }
  }

  async connectConsumer(topic = config.kafkaTopic) {
    try {
      await this._consumer.connect();
      await this._consumer.subscribe({ topic, fromBeginning: true });
    } catch (error) {
      logger.error(error);
      await this._consumer.disconnect();
    }
  }

  async send(messages: Message[]) {
    await this._producer.send({
      topic: config.kafkaTopic,
      messages,
    });
  }

  async run(func: (m: string | undefined) => Promise<void>) {
    return this._consumer.run({
      eachMessage: async ({ message }) => {
        await func(message.value ? message.value.toString() : undefined);
      },
    });
  }

  seek(partition = 0, offset = '0', topic = config.kafkaTopic) {
    void this._consumer.run({
      // eslint-disable-next-line @typescript-eslint/require-await
      eachMessage: async () => {
        return;
      },
    });
    return this._consumer.seek({ topic, partition, offset });
  }
}

export default KafkaService;
