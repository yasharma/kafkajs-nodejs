import jwt from 'jsonwebtoken';
import { IUserToken } from '../../models/IUserToken';
import { NextFunction, Response } from 'express';
import { Request } from '../../models/Request';


const decode = (token: string) => {
  return new Promise((resolve, reject) => {
    try {
      const decoded = jwt.decode(token);
      return resolve(decoded);
    } catch (err) {
      return reject(err);
    }
  });
};

// jwt-decode application/json
export const tokenHandler = async (req: Request, res: Response, next: NextFunction) => {
  let token = '';
  try {
    if (req.headers) token = req.headers.authorization ? req.headers.authorization.toString().split(' ')[1] : '';
    if (!token || token === '') if (next) return next();
    const decoded = (await decode(token)) as IUserToken;
    req.user = decoded;
    return next();
  } catch (e) {
    return next();
  }
};
