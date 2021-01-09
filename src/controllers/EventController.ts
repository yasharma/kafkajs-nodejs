import { EventService } from '../services/EventService';
import { Response, NextFunction } from 'express';
import { Request } from '../models/Request';

export class EventController {
  constructor(protected _eventService: EventService) {}

  async send(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this._eventService.send(req.body);
      return res.status(200).json(data);
    } catch (error) {
      return next(error);
    }
  }
}
