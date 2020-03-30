const jwt = require("jsonwebtoken");

jwtSign = (data, expireTime) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: expireTime
  });
};

module.exports = {
  jwtSign
};
