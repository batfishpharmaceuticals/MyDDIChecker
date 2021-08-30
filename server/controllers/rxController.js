import Rx from '../models/rxModel.js';

const rxController = {};

rxController.getRx = async (req, res, next) => {
  try {
    console.log('Getting Rxs!')

    const { rx } = req.body;

    const foundRxs = [];
    for (let i = 0; i < rxs.length; i++) {
      const result = await findOne({ name: rxs[i].name }).exec()
      if (!result.hasOwnProperty('name')) {
        throw "Rx does not exist.";
      }
      foundRxs.push(result);
    }

    res.locals.rxs = foundRxs;

    return next();
  } catch (err) {
    return next({ err })
  }
}

rxController.findInteractions = (req, res, next) => {
  const foundRxs = res.locals.rxs;
  const { otc } = req.body;

  const interactions = foundRxs.filter( rx => {
    const otcs = rx.otcInteractions.map( i => i.name);
    return otcs.includes(otc);
  })

  res.locals.interactions = interactions;
}


export default rxController;