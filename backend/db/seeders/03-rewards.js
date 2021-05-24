'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Rewards', [
      {
        projectId: 1,
        amount: 5000,
        description: "test reward"
      },
      {
        projectId: 2,
        amount: 5000,
        description: faker.commerce.product()
      },
      {
        projectId: 3,
        amount: 500,
        description: faker.commerce.product()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Rewards', null, {});
  }
};
