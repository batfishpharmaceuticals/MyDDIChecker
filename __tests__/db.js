// import User from '../server/models/userModel';
// import Rx from '../server/models/rxModel';
import "regenerator-runtime/runtime";
import {MongoClient} from 'mongodb';

describe('User', () => {
  let username;
  let password;
  let rxs;
  let connection;
  let db;
  let users;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://charlesg:codesmith1234@noodle1.5i6rq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db('DDI')
    users = db.collection('users');
    //create test user data
    username = 'Jonnie';
    password = 'codesmith1234';
    rxs = [{
        rxId: '612eb9dd224da109cf30e493',
        name: 'doxycycline'
      }];
    // done();
  })
  
  afterAll(async () => {
    //delete test user
    await users.deleteOne({
      username: username,
    });
    // await db.close();
    await connection.close();
    // done();
  })

  it('creates a user', async () => {
    // find a user not currently there
      // renders empty array/object
    // create a user
    // find the user we just created
      // expect find user to return new user 
    console.log('hey i got here');
    const user = await users.find({username: 'pinkarmadillo'}, (err, found) => {
      if(err) console.log(err);
      console.log(found);
      return found;
    });
    console.log(user)
    
    // expect(notFound).toEqual()
    // const createUser = await User.create({
    //   username: username,
    //   password: password,
    //   rxs: rxs
    // })
    
    
  })
  
  it('find a user and push to the rxs array', () => {
    
  })
  it('find a user and pull from the rxs array', () => {
    
  })
})

xdescribe('Rx', () => {
  beforeAll((done) => {
    //create test user data
  })
  
  afterAll((done) => {
    //delete test user
  })
  
  it('find a user and pull from the rxs array', () => {
    
  })
})