import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  contact: {
    type: Number
  },
  bloodGroup: {
    type: String
  },
  note: {
    type: String
  }
});

const RequestBlood = mongoose.model('Request', requestSchema);

export default RequestBlood;
