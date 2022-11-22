const getErrorMessage = (error, param) => {
  let message = error.details.find((error) => error.param === param)?.message;

  if (!message) {
    return '';
  }

  message = message.replaceAll('"', '');
  message = message.charAt(0).toUpperCase() + message.slice(1);

  return message;
};

const getGender = (male, female, other) => {
  if (male) {
    return 'Male';
  }

  if (female) {
    return 'Female';
  }

  if (other) {
    return 'Other';
  }
};
