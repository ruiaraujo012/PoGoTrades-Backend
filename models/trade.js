module.exports = (sequelize, Sequelize) => {
  const Trade = sequelize.define("Trade", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tradeCost: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    specialTrade: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    luckyTrade: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // Add after (feature)
    // bothRegistered: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true,
    // },
    // friendshipLevel: {
    //   type: Sequelize.SMALLINT,
    //   allowNull: false,
    //   defaultValue: 1,
    //   validate: {
    //     min: 1,
    //     max: 4,
    //   },
    // },
    state: {
      type: Sequelize.ENUM("Scheduled", "Done", "Canceled"),
      allowNull: false,
      defaultValue: "Scheduled",
    },
    observation: {
      type: Sequelize.TEXT,
    },
  });

  Trade.associate = models => {
    models.Trade.belongsTo(models.User, {
      foreignKey: {
        name: "trainer1Id",
        allowNull: false,
      },
    });

    models.Trade.belongsTo(models.User, {
      foreignKey: {
        name: "trainer2Id",
        allowNull: false,
      },
    });

    models.Trade.belongsTo(models.Pokemon, {
      foreignKey: {
        name: "pokemon1Id",
        allowNull: false,
      },
    });

    models.Trade.belongsTo(models.Pokemon, {
      foreignKey: {
        name: "pokemon2Id",
        allowNull: false,
      },
    });
  };

  return Trade;
};
