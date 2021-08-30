import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const rxSchema = new Schema({
  name: {type: String, required: true, unique: true},
  otcInteractions: [{
    name: String
  }]
})

const Rx = mongoose.model('rx', rxSchema);

export default Rx;