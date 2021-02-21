'use strict';
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [
        
          {
            userId: 2 ,
            trainerId: 14,
            review: faker.lorem.sentence(),
            stars: faker.random.number({
              'min': 0,
              'max': 5
            }),
            overall: faker.random.number({
              'min': 0,
              'max': 5
            }),
            knowledge: faker.random.number({
              'min': 0,
              'max': 5
            }),
            profesionalism: faker.random.number({
              'min': 0,
              'max': 5
            }),
            refer: faker.random.number({
              'min': 0,
              'max': 5
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
