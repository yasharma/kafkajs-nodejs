import { Router } from 'express';
import { SetupController } from '../controllers/SetupController';
import { SetupService } from '../services/SetupService';
import RequestHelper from '../utils/requestHelper';

export default () => {
  const router = Router();

  const controller = new SetupController(new SetupService(new RequestHelper()));
  router.route('/').get((req, res, next) => controller.setup(req, res, next));

  return router;
};
