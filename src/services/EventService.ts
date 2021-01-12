import { IMessage } from '../models/entities/IMessage';
import { EventRepository } from '../repositories/EventRepository';
import loggerFactory from '../utils/logging';
import KafkaService from './KafkaService';
const logger = loggerFactory.getLogger('EventService');
export class EventService {
  constructor(protected _kafkaService: KafkaService) {
    // body
  }

  protected get eventRepo() {
    return new EventRepository();
  }

  async send(body: { messages: { body: 'string' }[] }) {
    const _messages = body.messages.map(message => ({
      value: JSON.stringify(message.body),
      key: Date.now().toString(),
    }));
    await this._kafkaService.send(_messages);
    return {
      message: 'Data saved!',
      data: _messages,
    };
  }

  async save(data: IMessage) {
    logger.info('Consumer: ', data);
    await this.eventRepo.upsert(data);
    return;
  }
}
