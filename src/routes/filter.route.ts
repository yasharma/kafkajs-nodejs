import { Router } from 'express';
import { FilterController } from '../controllers/FilterController';
import { FilterService } from '../services/FilterService';
import RequestHelper from '../utils/requestHelper';

export default () => {
  const router = Router();

  const controller = new FilterController(new FilterService(new RequestHelper()));
  router.route('/').get((req, res, next) => controller.getFilters(req, res, next));

  return router;
};
