import Rx from '../models/rxModel.js';

const rxController = {};

rxController.getRx = async (req, res, next) => {
  try {
    console.log('Getting Rxs!')

    const { rxs } = req.body;

    const foundRxs = [];
    for (let i = 0; i < rxs.length; i++) {
      const result = await findOne({ name: rxs[i] }).exec()
      foundRxs.push(result);
    }

    res.locals.rxs = foundRxs;

    return next();
  } catch (err) {
    return next({ err })
  }
}


export default rxController;