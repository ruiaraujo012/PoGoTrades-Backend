module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define("Region", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    generation: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      unique: true,
    },
  });

  Region.associate = models => {
    models.Region.hasMany(models.Pokemon, {
      foreignKey: {
        name: "regionId",
        allowNull: false,
      },
    });
  };

  return Region;
};
