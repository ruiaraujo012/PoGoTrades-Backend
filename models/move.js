module.exports = (sequelize, Sequelize) => {
  const Move = sequelize.define("Move", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
  });

  Move.associate = models => {
    models.Move.belongsTo(models.Type, {
      foreignKey: {
        name: "typeId",
        allowNull: false,
      },
    });

    models.Move.hasMany(models.PokemonMove, {
      foreignKey: {
        name: "moveId",
        allowNull: false,
      },
    });
  };

  return Move;
};
