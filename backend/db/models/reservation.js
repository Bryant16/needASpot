"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trainerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bookTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      bookDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  Reservation.associate = function (models) {
    // associations can be defined here
    Reservation.belongsTo(models.Trainer, { foreignKey: "trainerId" });
    Reservation.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Reservation;
};
