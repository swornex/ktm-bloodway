const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function () {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
