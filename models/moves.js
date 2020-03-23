"use strict";

module.exports = (sequelize, Sequelize) => {
  const Move = sequelize.define("Move", {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    }
  });

  Move.associate = models => {
    models.Move.belongsTo(models.Type, {
      foreignKey: {
        allowNull: false
      }
    });

    models.Move.hasMany(models.PokemonMove, {
      foreignKey: {
        name: "FastMoveId",
        allowNull: false
      }
    });

    models.Move.hasMany(models.PokemonMove, {
      foreignKey: {
        name: "ChargeMove1Id",
        allowNull: false
      }
    });

    models.Move.hasMany(models.PokemonMove, {
      foreignKey: {
        name: "ChargeMove2Id",
        allowNull: true
      }
    });

    // models.Move.belongsToMany(models.Pokemon, {
    //   through: "PokemonMove",
    //   foreignKey: {
    //     name: "FastMoveId",
    //     allowNull: false
    //   }
    // });

    // models.Move.belongsToMany(models.Pokemon, {
    //   through: "PokemonMove",
    //   foreignKey: {
    //     name: "ChargeMove1Id",
    //     allowNull: false
    //   }
    // });

    // models.Move.belongsToMany(models.Pokemon, {
    //   through: "PokemonMove",
    //   foreignKey: {
    //     name: "ChargeMove2Id",
    //     allowNull: true
    //   }
    // });
  };

  return Move;
};
