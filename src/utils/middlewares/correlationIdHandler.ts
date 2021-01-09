import { Request, Response, NextFunction } from 'express';
import { createNamespace } from 'continuation-local-storage';
const correlationIdNamespace = createNamespace('correlation_id');

export const correlationIdHandler = (req: Request, res: Response, next: NextFunction) => {
  correlationIdNamespace.bindEmitter(req);
  correlationIdNamespace.run(() => {
    correlationIdNamespace.set('correlationId', req.headers['learning-dashboard-request-correlation-id']);
    next();
  });
};
