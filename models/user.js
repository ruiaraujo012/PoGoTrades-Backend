module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    level: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
        max: 40,
      },
    },
    passwordHash: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    role: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 1,
      },
    },
  });

  User.associate = models => {
    models.User.belongsTo(models.Team, {
      foreignKey: {
        name: "teamName",
        allowNull: true,
      },
    });

    models.User.hasMany(models.Trade, {
      foreignKey: {
        name: "trainer1Id",
        allowNull: false,
      },
    });

    models.User.hasMany(models.Trade, {
      foreignKey: {
        name: "trainer2Id",
        allowNull: false,
      },
    });
  };

  return User;
};
