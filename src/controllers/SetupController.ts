import { SetupService } from '../services/SetupService';
import { Response, NextFunction } from 'express';
import { Request } from '../models/Request';

export class SetupController {
  constructor(protected setupService: SetupService) {}

  async setup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.setupService.setup();
      return res.status(200).json(data);
    } catch (error) {
      return next(error);
    }
  }
}
