'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trainers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      days: {
        allowNull: false,
        type: Sequelize.STRING
      },
      open: {
        allowNull: false,
        type: Sequelize.TIME
      },
      close: {
        allowNull: false,
        type: Sequelize.TIME
      },
      style: {
        allowNull: false,
        type: Sequelize.STRING
      },
      certifications: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      education: {
        allowNull: false,
        type: Sequelize.STRING
      },
      specialities: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      gym: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trainers');
  }
};