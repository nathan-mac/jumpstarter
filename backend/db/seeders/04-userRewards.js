"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("UserRewards", [
      {
        userId: 1,
        rewardId: 2
      },
      {
        userId: 1,
        rewardId: 3
      },
      {
        userId: 2,
        rewardId: 3
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete("UserRewards", null, {});
  }
};
