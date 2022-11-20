const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

showPasswordCheckbox.addEventListener('change', function () {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

submitButton.addEventListener('click', function (e) {
  e.preventDefault();
});
