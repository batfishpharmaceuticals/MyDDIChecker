import { Router } from 'express';
import rxController from '../controllers/rxController';
import Rx from '../models/rxModel';

const router = Router();

router.get('/', rxController.getRx, (req, res) => {
  res.status(200).json(res.locals.rxList);
})

export default router;