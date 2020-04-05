const { User } = require("../../models/index");

const Users = module.exports;

/**
 * Get all users (Basic information [Id, Username])
 * @returns {Array} All users on database
 */
Users.getAllBasic = () => {
  return User.findAll({
    attributes: ["id", "username"],
  });
};

/**
 * Get all users (Admins only)
 * @returns {Array} All users on database
 */
Users.getAll = () => {
  return User.findAll({
    attributes: {
      exclude: ["passwordHash", "createdAt", "updatedAt"],
    },
  });
};

/**
 * Get user by Id (Basic information [Id, Username])
 * @param {Number} id - Id to find user
 * @returns {Array} Corresponded user on database
 */
Users.getIdBasic = id => {
  return User.findByPk(id, {
    attributes: ["id", "username"],
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
      exclude: ["passwordHash", "createdAt", "updatedAt"],
    },
  });
};

/**
 * Get user by username (Basic information [Id, Username])
 * @param {String} username - Username to find user
 * @returns {Array} Corresponded user on database
 */
Users.getUsernameBasic = username => {
  return User.findOne({
    limit: 1,
    where: {
      username: username,
    },
    attributes: ["id", "username"],
  });
};

/**
 * Get user by username (Only current user username)
 * @param {String} username - Username to find user
 * @returns {Array} Corresponded user on database
 */
Users.getUsername = username => {
  return User.findOne({
    limit: 1,
    where: {
      username: username,
    },
    attributes: {
      exclude: ["passwordHash", "createdAt", "updatedAt"],
    },
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
