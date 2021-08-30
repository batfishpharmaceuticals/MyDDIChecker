import { Router } from 'express';
import rxController from '../controllers/rxController';
import Rx from '../models/rxModel';

const router = Router();

router.post('/', // turn objects into strings: res.locals.rx = req.body.rx.map( i => i.name)
(req, res, next) => {
  console.log('rxRoutering')
  res.locals.rx = req.body.rx.map(i => i.name);
  console.log(res.locals.rx)
  return next();
},
rxController.getRx,
rxController.findInteractions, 
(req, res) => {
  res.status(200).json(res.locals.interactions.length > 0);
})

export default router;