/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response, NextFunction } from 'express';
import loggerFactory from '../logging';
const logger = loggerFactory.getLogger('respondeWithError');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err) return next();
  const errorResponse = {
    error: err.data || err.message || err || 'Somthing went Wrong!',
    type: err.type,
    statusCode: err.statusCode,
    validations: err.validations,
  };
  logger.error('[ERROR]: ', JSON.stringify(errorResponse));
  return res.status(400).json(errorResponse);
};
