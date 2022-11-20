const validate = (body, schema) => {
  return new Promise((resolve, reject) => {
    const options = {
      abortEarly: false
    };
    const { error, value } = schema.validate(body, options);

    if (error) {
      return reject(error);
    }

    resolve(value);
  });
};

export default validate;
