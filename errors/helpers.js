const mappedSequelizeErrors = errors => {
  return errors.map(error => {
    return { message: error.message, path: error.path, value: error.value };
  });
};

module.exports = {
  mappedSequelizeErrors,
};
