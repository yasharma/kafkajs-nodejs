import { Request, Response } from 'express';

export const healthCheckHandler = (req: Request, res: Response) => {
  res.json('OK');
};
