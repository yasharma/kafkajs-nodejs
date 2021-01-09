import KafkaService from './KafkaService';

export class EventService {
  constructor(protected _kafkaService: KafkaService) {
    // body
  }

  async send(body: { messages: { body: 'string' }[] }) {
    const _messages = body.messages.map(message => ({ value: message.body, key: Date.now().toString() }));
    await this._kafkaService.send(_messages);
    return {
      message: 'Data saved!',
      data: _messages,
    };
  }
}
