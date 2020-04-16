module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define("Type", {
    name: {
      type: Sequelize.STRING(50),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  });

  Type.associate = models => {
    models.Type.hasMany(models.Pokemon, {
      foreignKey: {
        name: "primaryTypeName",
        allowNull: false,
      },
    });

    models.Type.hasMany(models.Pokemon, {
      foreignKey: {
        name: "secondaryTypeName",
        allowNull: true,
      },
    });

    models.Type.hasMany(models.Move, {
      foreignKey: {
        name: "typeName",
        allowNull: false,
      },
    });
  };

  return Type;
};
