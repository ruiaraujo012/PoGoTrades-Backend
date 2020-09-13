const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

/**
 * Generates the password hash
 */
createHash = async password => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Check the password hash
 */
isValidPassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

module.exports = {
  createHash,
  isValidPassword,
};
