import KafkaService from './KafkaService';

export class EventService {
  constructor(protected _kafkaService: KafkaService) {
    // body
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

  save = async (message: string | undefined) => {
    console.log('>>>>>', message);
    return;
  };
}
