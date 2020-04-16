module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("Team", {
    name: {
      type: Sequelize.STRING(10),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    imageName: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    color: {
      type: Sequelize.ENUM("Yellow", "Red", "Blue"),
      allowNull: false,
      unique: true,
    },
  });

  Team.associate = models => {
    models.Team.hasMany(models.User, {
      foreignKey: {
        name: "teamName",
        allowNull: true,
      },
    });
  };

  return Team;
};
