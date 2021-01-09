import { Collection, ClientSession } from 'mongodb';
import { Repo } from './RepoNames';
import { getMongoClient } from '../initializer';

export class NewsAPISRepository {
    protected _collection: Collection;

    constructor() {
        this._collection = getMongoClient().collection(Repo.newsapis);
    }

    async findDefaultFilters() {
        const defaultFilters = await this._collection.aggregate([
            {
                $group: {
                    _id: null,
                    polarity: { $addToSet: { name: '$sentiment', checked: true } },
                    topics: { $addToSet: { name: '$topic', checked: true } },
                    sources: { $addToSet: { name: '$source_name', chedked: true } }
                }
            },
            {
                $project: {
                    _id: 0,
                    polarity: 1,
                    topics: 1,
                    sources: 1
                }
            }
        ]).toArray();
        return (defaultFilters && defaultFilters.length > 0) ? defaultFilters : [];
    }
}
