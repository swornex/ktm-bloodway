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
    type: String
  },
  contact: {
    type: Number
  },
  bloodGroup: {
    type: String
  },
  note: {
    type: String
  },
  donors: [
    {
      donor: {
        type: mongoose.Schema.Types.ObjectId
      }
    }
  ]
});

const RequestBlood = mongoose.model('Request', requestSchema);

export default RequestBlood;
