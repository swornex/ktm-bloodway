const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

showPasswordCheckbox.addEventListener('change', function () {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

loginButton?.addEventListener('click', async (e) => {
  e.preventDefault();

  const emailError = document.getElementsByClassName('email-error')[0];
  const passwordError = document.getElementsByClassName('password-error')[0];

  emailError.innerHTML = '';
  passwordError.innerHTML = '';

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (data.error) {
    emailError.innerText = getErrorMessage(data.error, 'email');
    passwordError.innerText = getErrorMessage(data.error, 'password');
  } else {
    setCookie('access_token', data.token, 1);

    location.assign('/');
  }
});

registerButton?.addEventListener('click', async (e) => {
  e.preventDefault();

  const firstNameError = document.getElementsByClassName('fname-error')[0];
  const lastNameError = document.getElementsByClassName('lname-error')[0];
  const emailError = document.getElementsByClassName('email-error')[0];
  const passwordError = document.getElementsByClassName('password-error')[0];
  const contactError = document.getElementsByClassName('contact-error')[0];
  const addressError = document.getElementsByClassName('address-error')[0];
  const genderError = document.getElementsByClassName('gender-error')[0];
  const bloodGroupError =
    document.getElementsByClassName('blood-group-error')[0];

  firstNameError.innerHTML = '';
  lastNameError.innerHTML = '';
  emailError.innerHTML = '';
  passwordError.innerHTML = '';
  contactError.innerHTML = '';
  addressError.innerHTML = '';
  genderError.innerHTML = '';
  bloodGroupError.innerHTML = '';

  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const male = document.getElementById('male').checked;
  const female = document.getElementById('female').checked;
  const other = document.getElementById('other').checked;
  const bloodGroup = document.getElementById('blood-group').value;

  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      contact,
      address,
      gender: getGender(male, female, other),
      bloodGroup
    })
  });

  const data = await response.json();

  if (data.error) {
    emailError.innerText = getErrorMessage(data.error, 'email');
    passwordError.innerText = getErrorMessage(data.error, 'password');
    firstNameError.innerText = getErrorMessage(data.error, 'firstName');
    lastNameError.innerText = getErrorMessage(data.error, 'lastName');
    contactError.innerText = getErrorMessage(data.error, 'contact');
    addressError.innerText = getErrorMessage(data.error, 'address');
    genderError.innerText = getErrorMessage(data.error, 'gender');
    bloodGroupError.innerText = getErrorMessage(data.error, 'bloodGroup');
  } else {
    setCookie('access_token', data.token, 1);

    location.assign('/');
  }
});
