module.exports = (sequelize, Sequelize) => {
  const PokemonMove = sequelize.define("PokemonMove", {
    legacy: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  PokemonMove.associate = models => {
    models.Move.belongsToMany(models.Pokemon, {
      through: PokemonMove,
      foreignKey: "moveId",
      otherKey: "pokemonId",
    });
    models.Pokemon.belongsToMany(models.Move, {
      through: PokemonMove,
      foreignKey: "pokemonId",
      otherKey: "moveId",
    });
  };

  return PokemonMove;
};
