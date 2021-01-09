import { FilterService } from '../services/FilterService';
import { Response, NextFunction } from 'express';
import { Request } from '../models/Request';

export class FilterController {
  constructor(protected filterService: FilterService) {}

  async getFilters(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.filterService.findDefaultFilters();
      return res.status(200).json(data);
    } catch (error) {
      return next(error);
    }
  }
}
