module.exports = (sequelize, Sequelize) => {
  const Pokemon = sequelize.define("Pokemon", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokedex: {
      type: Sequelize.SMALLINT,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    form: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    // save for see late
    // alolan: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },
    shiny: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    regional: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // save for see late
    // purified: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },
    // baby: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },
    canBeTraded: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    available: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    category: {
      type: Sequelize.ENUM("Common", "Legendary", "Mythical"),
      allowNull: false,
      defaultValue: "Common",
    },
    imageName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Pokemon.associate = models => {
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

    models.Pokemon.belongsTo(models.Region, {
      foreignKey: {
        name: "regionId",
        allowNull: false,
      },
    });

    models.Pokemon.belongsTo(models.Type, {
      foreignKey: {
        name: "type1Id",
        allowNull: false,
      },
    });

    models.Pokemon.belongsTo(models.Type, {
      foreignKey: {
        name: "type2Id",
        allowNull: true,
      },
    });

    models.Pokemon.hasMany(models.PokemonMove, {
      foreignKey: {
        name: "pokemonId",
        allowNull: false,
      },
    });
  };

  return Pokemon;
};
