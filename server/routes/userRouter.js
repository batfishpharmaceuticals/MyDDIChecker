import { Router } from 'express';
import userController from '../controllers/userController.js';
import rxController from '../controllers/rxController.js';

const router = Router();

router.post ('/signUp', 
  userController.createUser, 
  (req, res) => {
    res.sendStatus(200);    
  })

router.post('/login', 
  userController.findOne,
  userController.verifyUser, 
  (req, res) => {
  // res.redirect(/home)?
  
  res.status(200).json( res.locals.match );
})

router.post('/logout', 
  userController.logOut, 
  (req, res) => {
  //res.redirect(/login)?
})

router.post('/addRx', rxController.getRx, 
  userController.addRx, 
  (req, res) => {
  res.status(200).send('Added Rx!');
})

export default router;