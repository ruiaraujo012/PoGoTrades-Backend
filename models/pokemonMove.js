module.exports = (sequelize, Sequelize) => {
  const PokemonMove = sequelize.define("PokemonMove", {
    legacy: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isFastMove: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  return PokemonMove;
};
