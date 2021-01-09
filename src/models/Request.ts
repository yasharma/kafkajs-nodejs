import { Request as ExpressRequest } from 'express';
import { IUserToken } from './IUserToken';

export interface Request extends ExpressRequest {
  user?: IUserToken;
}
