"use strict";

module.exports = (sequelize, Sequelize) => {
  const Trade = sequelize.define("Trade", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TradeCost: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    SpecialTrade: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    LuckyTrade: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    BothRegistered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    FriendshipLevel: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
        max: 4
      }
    },
    State: {
      type: Sequelize.ENUM("Scheduled", "Done", "Canceled"),
      allowNull: false,
      defaultValue: "Scheduled"
    },
    Observation: {
      type: Sequelize.TEXT
    }
  });

  Trade.associate = models => {
    models.Trade.belongsTo(models.User, {
      foreignKey: {
        name: "Trainer1Id",
        allowNull: false
      }
    });

    models.Trade.belongsTo(models.User, {
      foreignKey: {
        name: "Trainer2Id",
        allowNull: false
      }
    });

    models.Trade.belongsTo(models.Pokemon, {
      foreignKey: {
        name: "Pokemon1Id",
        allowNull: false
      }
    });

    models.Trade.belongsTo(models.Pokemon, {
      foreignKey: {
        name: "Pokemon2Id",
        allowNull: false
      }
    });
  };

  return Trade;
};
