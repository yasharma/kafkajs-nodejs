import { Collection } from 'mongodb';
import { getMongoClient } from '../initializer';
import { IMessage } from '../models/entities/IMessage';
import { Repo } from './RepoNames';

export class EventRepository {
  protected _collection: Collection;

  constructor() {
    this._collection = getMongoClient().collection(Repo.Events);
  }

  upsert(data: IMessage) {
    return this._collection.updateOne(
      { key: data.key },
      { $set: { ...data, createdAt: new Date() } },
      { upsert: true },
    );
  }
}
