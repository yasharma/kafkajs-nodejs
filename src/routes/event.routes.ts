import { Router } from 'express';
import { EventController } from '../controllers/EventController';
import { EventService } from '../services/EventService';
import KafkaService from '../services/KafkaService';

export default (_kafkaService: KafkaService) => {
  const router = Router();

  const controller = new EventController(new EventService(_kafkaService));
  router.route('/').post((req, res, next) => controller.send(req, res, next));

  return router;
};
