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
  const bloodBanks = await response?.json();

  resp.render('blood-bank', { bloodBanks: bloodBanks || [] });
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

export const donate = async (req, resp) => {
  const { id } = req.params;
  let bloodRequest;

  if (id) {
    const response = await fetch(
      `http://localhost:3000/api/blood/request/${id}`,
      {
        headers: {
          Authorization: `Bearer ${req.cookies.access_token}`
        }
      }
    );
    const data = await response?.json();
    bloodRequest = data;
  }
  resp.render('request-donate-form', { isRequestForm: false, bloodRequest });
};

export const request = async (req, resp) => {
  const { id } = req.params;
  let bloodRequest;

  if (id) {
    const response = await fetch(
      `http://localhost:3000/api/blood/request/${id}`,
      {
        headers: {
          Authorization: `Bearer ${req.cookies.access_token}`
        }
      }
    );
    const data = await response?.json();
    bloodRequest = data;
  }
  resp.render('request-donate-form', { isRequestForm: true, bloodRequest });
};

export const bloodRequest = async (req, resp) => {
  const response = await fetch('http://localhost:3000/api/blood/request');
  const bloodRequests = await response?.json();

  resp.render('show-request-donate', {
    isRequestPage: true,
    bloodRequests: bloodRequests?.requestBlood || []
  });
};

export const bloodDonate = async (req, resp) => {
  const response = await fetch('http://localhost:3000/api/blood/donate', {
    headers: {
      Authorization: `Bearer ${req.cookies.access_token}`
    }
  });
  const bloodDonors = await response?.json();
  resp.render('show-request-donate', {
    isRequestPage: false,
    bloodDonors: bloodDonors?.donateBlood || []
  });
};
