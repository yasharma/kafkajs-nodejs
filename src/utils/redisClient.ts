import RedisIo, { Redis } from 'ioredis';
import loggerFactory from './logging';
const logger = loggerFactory.getLogger('RedisClient');
const HASHKEY = 'syncer';
export class RedisClient {
  protected _redis: Redis;
  protected _queryCache: Map<string, string> = new Map<string, string>();
  constructor(protected host: string, protected port: number) {
    this._redis = new RedisIo({ host, port });
  }

  async init() {
    this._queryCache = this.tranformHgetToMap(await this._redis.hgetall(HASHKEY));
    logger.trace('Query Cache created!');
    return this.transformMap(this._queryCache);
  }

  add(key: string, value: string) {
    this._queryCache.set(key, value);
    return this._redis.hmset(HASHKEY, this._queryCache);
  }

  async get(key: string) {
    const res = this._queryCache.get(key);
    if (res) {
      logger.trace('Query Cache hit!');
      return Promise.resolve(res);
    }
    const data = await this._redis.hget(HASHKEY, key);
    if (data) this._queryCache.set(key, data);
    return data;
  }

  async getAll() {
    if (this._queryCache.size > 0) {
      logger.trace('Query Cache hit!');
      return this.transformMap(this._queryCache);
    }
    this._queryCache = this.tranformHgetToMap(await this._redis.hgetall(HASHKEY));
    return this.transformMap(this._queryCache);
  }

  remove(key: string) {
    this._queryCache.delete(key);
    return this._redis.hdel(HASHKEY, key);
  }

  clearCache() {
    return this._queryCache.clear();
  }

  addJob(key: string, data: Map<string, string>) {
    return this._redis.hmset(key, data);
  }

  /**
   *
   * @param key string
   * ex: "key:*"  wildcard pattern
   */
  async getKeys(key: string) {
    return this._redis.keys(key);
  }

  async getJobById(key: string) {
    return this._redis.hgetall(key);
  }

  protected tranformHget(data: { [key: string]: string }) {
    return Object.keys(data).map(key => ({
      key,
      value: data[key],
    }));
  }

  protected tranformHgetToMap(data: { [key: string]: string }) {
    return new Map(Object.keys(data).map(key => [key, data[key]]));
  }

  protected transformMap(data: Map<string, string>) {
    return Array.from(data.keys()).map(key => ({
      key,
      value: this._queryCache.get(key),
    }));
  }
}
