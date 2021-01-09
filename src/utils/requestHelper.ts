import request from 'request';
import loggerFactory from './logging';
import correlationIDHelper from '../utils/correlationIDHelper';

const logger = loggerFactory.getLogger('requestHelper');

export default class RequestHelper {
  get<T>(url: string, accessToken?: string) {
    logger.info(`Hitting get with ${url}`);
    const headerBody = {
      Authorization: accessToken ? `${accessToken}` : undefined,
      'syncer-request-correlation-id': correlationIDHelper.getCorrelationId(),
    };
    return new Promise<T>((resolve, reject) => {
      request(
        url,
        {
          method: 'GET',
          headers: headerBody,
          gzip: true,
          json: true,
          timeout: 600000,
        },
        (error: Error, response: request.Response, body: T) => {
          if (error) return reject(error);
          if (response.statusCode !== 200) return reject(body);
          return resolve(body);
        },
      );
    });
  }

  post<T>(url: string, postBody: T, accessToken?: string) {
    logger.info(`Hitting post with body ${url}`);
    const headerBody = {
      Authorization: accessToken ? `${accessToken}` : undefined,
      'syncer-request-correlation-id': correlationIDHelper.getCorrelationId(),
    };
    return new Promise<T>((resolve, reject) => {
      request(
        url,
        {
          method: 'POST',
          headers: headerBody,
          gzip: true,
          json: true,
          body: postBody,
          timeout: 600000,
        },
        (error: Error, response: request.Response, body: T) => {
          if (error) return reject(error);
          if (response.statusCode !== 200) return reject(body);
          return resolve(body);
        },
      );
    });
  }

  put<T>(url: string, postBody: T, accessToken?: string) {
    logger.info(`Hitting put with body ${url}`);
    const headerBody = {
      Authorization: accessToken ? `${accessToken}` : undefined,
      'syncer-request-correlation-id': correlationIDHelper.getCorrelationId(),
    };
    return new Promise<T>((resolve, reject) => {
      request(
        url,
        {
          method: 'PUT',
          headers: headerBody,
          gzip: true,
          json: true,
          body: postBody,
          timeout: 600000,
        },
        (error: Error, response: request.Response, body: T) => {
          if (error) return reject(error);
          if (response.statusCode !== 200) return reject(body);
          return resolve(body);
        },
      );
    });
  }
}
