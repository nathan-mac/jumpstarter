'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Projects', [
      {
        name: 'Demo Project',
        description: "hello test",
        userId: 0,
        goal: 10000,
        startDate: new Date(),
        endDate: "2021-05-24T21:51:37.687Z",
        pledged: 0,
        investors: 0,
        projectStatus: "New"
      },
      {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        userId: 1,
        goal: 10000,
        startDate: faker.datatype.datetime(),
        endDate: faker.datatype.datetime(),
        pledged: 100,
        investors: 1,
        projectStatus: "Incomplete"
      },
      {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        userId: 2,
        goal: 1000,
        startDate: faker.datatype.datetime(),
        endDate: faker.datatype.datetime(),
        pledged: 1000,
        investors: 2,
        projectStatus: "Complete"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Projects', null, {});
  }
};
