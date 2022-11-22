const logoutButton = document.getElementById('logout');

logoutButton?.addEventListener('click', async () => {
  eraseCookie('access_token');
  location.assign('/');
});
