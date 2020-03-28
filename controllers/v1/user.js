const { User } = require("../../models/index");

const Users = module.exports;

/**
 * Get all users (Basic information [Id, Nickname])
 * @returns {Array} All users on database
 */
Users.getAllBasic = () => {
  return User.findAll({
    attributes: ["Id", "Username"]
  });
};

/**
 * Get all users (Admins only)
 * @returns {Array} All users on database
 */
Users.getAll = () => {
  return User.findAll({
    attributes: {
      exclude: ["PasswordHash"]
    }
  });
};

/**
 * Get user by Id (Basic information [Id, Nickname])
 * @param {Number} id - Id to find user
 * @returns {Array} Corresponded user on database
 */
Users.getIdBasic = id => {
  return User.findByPk(id, {
    attributes: ["Id", "Username"]
  });
};

/**
 * Get user by Id (Only current user Id)
 * @param {Number} id - Id to find user
 * @returns {Array} Corresponded user on database
 */
Users.getId = id => {
  return User.findByPk(id, {
    attributes: {
      exclude: ["PasswordHash"]
    }
  });
};

/**
 * Insert one user
 * @param {Object} data - Data to insert on database
 * @returns {Object} Data created on database
 */
Users.insertOne = data => {
  return User.create(data);
};
