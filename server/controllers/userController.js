import User from '../models/userModel';

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await User.create({ username, password, rxs: []})
    
    return next();
  } catch (err) {
    
    return next({ err })
  }
};

userController.findOne = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username: username });
    console.log(user)
    res.locals.user = user;
    return next();
  } catch (err) {
    return next({ err })
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    console.log('Verifying user!')
    const { password } = req.body;
    const user = res.locals.user;

    const match = await user.comparePasswords(password, user.password);

    res.locals.match = match;
    console.log(match)

    return next();
  } catch (err) {
    return next({ err })
  }
};

userController.logOut = async (req, res, next) => {
  try {
    console.log('Logging user out!')
    return next();

  } catch (err) {
    return next({ err })
  }
};

userController.addRx = async (req, res, next) => {
  try {
    console.log("addRx user!")
    const { username, rx } = req.body;
    const { id } = res.locals.rxs[0];

    const user = await User.findOneAndUpdate( {username}, {$push: {rxs: {name: rx, rxId: id}}}, {new: true});

    res.locals.rx_id = rx_id;
    
    return next();

  } catch (err) {
    return next({ err })
  }
};

userController.deleteRx = async (req, res, next) => {
  try {
    console.log("deleteRx user!")
    
    return next();

  } catch (err) {
    return next({ err })
  }
};

export default userController;