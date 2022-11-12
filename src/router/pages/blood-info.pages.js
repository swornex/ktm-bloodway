import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
  resp.render('blood-info', {
    bloodInfo: [
      {
        bloodType: 'A+',
        donateBloodTo: 'A+, AB+',
        receiveBloodFrom: 'A+, A-, O+, O-'
      },
      {
        bloodType: 'A-',
        donateBloodTo: 'A+, A-, AB+, AB-',
        receiveBloodFrom: 'A-, O-'
      },
      {
        bloodType: 'B+',
        donateBloodTo: 'B+, AB+',
        receiveBloodFrom: 'B+, B-, O+, O-'
      },
      {
        bloodType: 'B-',
        donateBloodTo: 'B+, B-, AB+, AB-',
        receiveBloodFrom: 'B-, O-'
      },
      {
        bloodType: 'AB+',
        donateBloodTo: 'AB+',
        receiveBloodFrom: 'Every Blood Group'
      },
      {
        bloodType: 'AB-',
        donateBloodTo: 'AB+, AB-',
        receiveBloodFrom: 'A-, B-, AB-, O-'
      },
      {
        bloodType: 'O+',
        donateBloodTo: 'A+, B+, AB+, O+',
        receiveBloodFrom: 'O+, O-'
      },
      {
        bloodType: 'O-',
        donateBloodTo: 'Every Blood Group',
        receiveBloodFrom: 'O-'
      }
    ]
  });
});

export default router;
