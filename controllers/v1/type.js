const db = require("../../models/index");

const Types = module.exports;

/**
 * Get all types
 * @returns {Array} All types on database
 */
Types.getAll = () => {
  return db.Type.findAll();
};

/**
 * Insert one type
 * @param {Object} data - Data to insert on database
 * @returns {Object} Data created on database
 */
Types.insertOne = data => {
  return db.Type.create(data);
};

/**
 * Insert multiple types
 * @param {Array} data - Array of data to insert on database
 * @param {Object} data[index] - Data to insert on database
 * @returns {Object} Data created on database
 */
Types.insertMany = data => {
  return db.Type.bulkCreate(data);
};
