module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define("Region", {
    name: {
      type: Sequelize.STRING(50),
      primaryKey: true,
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
    models.Region.hasMany(models.Pokedex, {
      foreignKey: {
        name: "regionName",
        allowNull: false,
      },
    });
  };

  return Region;
};
