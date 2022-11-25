import mongoose from 'mongoose';

const donateSchema = new mongoose.Schema({
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
    type: String
  },
  contact: {
    type: Number
  },
  address: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  bloodGroup: {
    type: String
  }
});

const DonateBlood = mongoose.model('Donate', donateSchema);

export default DonateBlood;
