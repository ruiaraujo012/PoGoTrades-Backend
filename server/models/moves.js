"use strict";

module.exports = (sequelize, Sequelize) => {
  const Move = sequelize.define("Move", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  });

  // Move.associate = models => {
  //   models.Move.belongsTo(models.Type, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //   models.Move.belongsToMany(models.Pokemon, { through: "PokemonMove" });
  // };

  return Move;
};
