"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trainerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      overall: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      knowledge: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profesionalism: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      refer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Trainer, { foreignKey: "trainerId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
