module.exports = (sequelize, Sequelize) => {
  const Move = sequelize.define("Move", {
    name: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  });

  Move.associate = models => {
    models.Move.belongsTo(models.Type, {
      foreignKey: {
        name: "typeName",
        allowNull: false,
      },
    });

    models.Move.belongsToMany(models.Pokemon, {
      through: models.PokemonMove,
      foreignKey: "moveName",
    });
  };

  return Move;
};
