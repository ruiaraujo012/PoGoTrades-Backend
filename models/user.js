module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    team: {
      type: Sequelize.ENUM("Instinct", "Mystic", "Valor", "Harmony"),
      allowNull: false,
      defaultValue: "Harmony",
    },
    level: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 40,
      },
    },
    passwordHash: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });

  User.associate = models => {
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
