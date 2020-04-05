module.exports = (sequelize, Sequelize) => {
  const PokemonMove = sequelize.define("PokemonMove", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    legacy: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  PokemonMove.associate = models => {
    models.PokemonMove.belongsTo(models.Move, {
      foreignKey: {
        name: "moveId",
        allowNull: false,
      },
    });

    models.PokemonMove.belongsTo(models.Pokemon, {
      foreignKey: {
        name: "pokemonId",
        allowNull: false,
      },
    });
  };

  return PokemonMove;
};
