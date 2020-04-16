module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "Categories",
    {
      category: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      canBeTraded: {
        type: Sequelize.BOOLEAN,
      },
    },
    { freezeTableName: true }
  );

  Category.associate = models => {
    models.Categories.hasMany(models.Pokedex, {
      foreignKey: {
        name: "category",
        allowNull: false,
      },
    });
  };

  return Category;
};
