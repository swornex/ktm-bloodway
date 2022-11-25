const donateButton = document.getElementById('donate');
const requestButton = document.getElementById('request');

// donate part

donateButton?.addEventListener('click', async (e) => {
  e.preventDefault();

  const firstNameError = document.getElementsByClassName('fname-error')[0];
  const lastNameError = document.getElementsByClassName('lname-error')[0];
  const emailError = document.getElementsByClassName('email-error')[0];
  const contactError = document.getElementsByClassName('contact-error')[0];
  const addressError = document.getElementsByClassName('address-error')[0];
  const ageError = document.getElementsByClassName('age-error')[0];
  const genderError = document.getElementsByClassName('gender-error')[0];
  const bloodGroupError =
    document.getElementsByClassName('blood-group-error')[0];

  firstNameError.innerHTML = '';
  lastNameError.innerHTML = '';
  emailError.innerHTML = '';
  contactError.innerHTML = '';
  addressError.innerHTML = '';
  ageError.innerHTML = '';
  genderError.innerHTML = '';
  bloodGroupError.innerHTML = '';

  const requestId = document?.getElementById('hidden-id').value;
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const age = document.getElementById('age').value;
  const male = document.getElementById('male').checked;
  const female = document.getElementById('female').checked;
  const other = document.getElementById('other').checked;
  const bloodGroup = document.getElementById('blood-group').value;

  const response = await fetch('/api/blood/donate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('access_token')}`
    },
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      contact,
      address,
      age,
      gender: getGender(male, female, other),
      bloodGroup,
      ...(requestId && { requestId })
    })
  });

  const data = await response.json();

  if (data.error) {
    emailError.innerText = getErrorMessage(data.error, 'email');
    firstNameError.innerText = getErrorMessage(data.error, 'firstName');
    lastNameError.innerText = getErrorMessage(data.error, 'lastName');
    contactError.innerText = getErrorMessage(data.error, 'contact');
    addressError.innerText = getErrorMessage(data.error, 'address');
    ageError.innerText = getErrorMessage(data.error, 'age');
    genderError.innerText = getErrorMessage(data.error, 'gender');
    bloodGroupError.innerText = getErrorMessage(data.error, 'bloodGroup');
  } else {
    location.assign('/blood-donate');
  }
});

// request part

requestButton?.addEventListener('click', async (e) => {
  e.preventDefault();

  const firstNameError = document.getElementsByClassName('fname-error')[0];
  const lastNameError = document.getElementsByClassName('lname-error')[0];
  const emailError = document.getElementsByClassName('email-error')[0];
  const contactError = document.getElementsByClassName('contact-error')[0];
  const bloodGroupError =
    document.getElementsByClassName('blood-group-error')[0];
  const notesError = document.getElementsByClassName('notes-error')[0];

  firstNameError.innerHTML = '';
  lastNameError.innerHTML = '';
  emailError.innerHTML = '';
  contactError.innerHTML = '';
  bloodGroupError.innerHTML = '';
  notesError.innerHTML = '';

  const requestId = document?.getElementById('hidden-id').value;
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const bloodGroup = document.getElementById('blood-group').value;
  const note = document.getElementById('note').value;

  const response = await fetch(
    requestId ? `/api/blood/request/${requestId}` : '/api/blood/request',
    {
      method: requestId ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('access_token')}`
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        contact,
        bloodGroup,
        note
      })
    }
  );

  const data = await response.json();

  if (data.error) {
    emailError.innerText = getErrorMessage(data.error, 'email');
    firstNameError.innerText = getErrorMessage(data.error, 'firstName');
    lastNameError.innerText = getErrorMessage(data.error, 'lastName');
    contactError.innerText = getErrorMessage(data.error, 'contact');
    bloodGroupError.innerText = getErrorMessage(data.error, 'bloodGroup');
    notesError.innerText = getErrorMessage(data.error, 'note');
  } else {
    location.assign('/blood-request');
  }
});
