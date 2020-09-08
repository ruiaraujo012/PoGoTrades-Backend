module.exports = (sequelize, Sequelize) => {
  const Pokemon = sequelize.define(
    "Pokemon",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      form: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      shiny: {
        type: Sequelize.BOOLEAN,
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      regional: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      indexes: [
        {
          fields: ["form", "shiny", "pokedexNumber"],
          unique: true,
        },
      ],
    }
  );

  Pokemon.associate = models => {
    models.Pokemon.belongsTo(models.Pokedex, {
      foreignKey: {
        name: "pokedexNumber",
      },
    });

    models.Pokemon.hasMany(models.Trade, {
      foreignKey: {
        name: "pokemon1Id",
        allowNull: false,
      },
    });

    models.Pokemon.hasMany(models.Trade, {
      foreignKey: {
        name: "pokemon2Id",
        allowNull: false,
      },
    });

    models.Pokemon.belongsTo(models.Type, {
      foreignKey: {
        name: "primaryTypeName",
        allowNull: false,
      },
    });

    models.Pokemon.belongsTo(models.Type, {
      foreignKey: {
        name: "secondaryTypeName",
        allowNull: true,
      },
    });

    models.Pokemon.belongsToMany(models.Move, {
      through: models.PokemonMove,
      foreignKey: "pokemon",
    });
  };

  return Pokemon;
};
