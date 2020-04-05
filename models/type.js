module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define("Type", {
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
  });

  Type.associate = models => {
    models.Type.hasMany(models.Pokemon, {
      foreignKey: {
        name: "type1Id",
        allowNull: false,
      },
    });

    models.Type.hasMany(models.Pokemon, {
      foreignKey: {
        name: "type2Id",
        allowNull: true,
      },
    });

    models.Type.hasMany(models.Move, {
      foreignKey: {
        name: "typeId",
        allowNull: false,
      },
    });
  };

  return Type;
};
