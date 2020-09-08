module.exports = (sequelize, Sequelize) => {
  const Pokedex = sequelize.define(
    "Pokedex",
    {
      number: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    { freezeTableName: true }
  );

  Pokedex.associate = models => {
    models.Pokedex.belongsTo(models.Region, {
      foreignKey: {
        name: "regionName",
        allowNull: false,
      },
    });

    models.Pokedex.hasOne(models.Pokemon, {
      foreignKey: {
        name: "pokedexNumber",
        allowNull: false,
      },
    });

    models.Pokedex.belongsTo(models.Categories, {
      foreignKey: {
        name: "category",
        allowNull: false,
      },
    });
  };

  return Pokedex;
};
