"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define(
    "Trainer",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      days: {
        type: DataTypes.STRING,
      },
      open: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      close: {
        type: DataTypes.TIME,
        allowNull:false,
      },
      style: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      certifications: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      education: {
        type: DataTypes.STRING,
      },
      specialities: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gym: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileUrl: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {}
  );
  Trainer.associate = function (models) {
    // associations can be defined here
    Trainer.hasMany(models.Favorite, { foreignKey: "trainerId" });
    Trainer.hasMany(models.Reservation, { foreignKey: "trainerId" });
    Trainer.hasMany(models.Review, { foreignKey: "trainerId" });
  };
  return Trainer;
};
