import fetch from 'node-fetch';

export const home = (req, resp) => {
  resp.render('index');
};

export const login = (req, resp) => {
  resp.render('login-register-form', { isRegisterForm: false });
};

export const register = (req, resp) => {
  resp.render('login-register-form', { isRegisterForm: true });
};

export const bloodBank = async (req, resp) => {
  const response = await fetch('http://localhost:3000/api/blood-bank');
  const bloodBanks = await response.json();

  resp.render('blood-bank', { bloodBanks });
};

export const bloodInfo = (req, resp) => {
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
};

export const donate = (req, resp) => {
  resp.render('request-donate-form', { isRequestForm: false });
};

export const request = (req, resp) => {
  resp.render('request-donate-form', { isRequestForm: true });
};
