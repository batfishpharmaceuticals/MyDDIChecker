import { Router } from 'express';
import rxController from '../controllers/rxController';
import Rx from '../models/rxModel';

const router = Router();

router.get('/', rxController.getRx,
rxController.findInteractions, 
(req, res) => {
  res.status(200).json(res.locals.interactions);
})

export default router;