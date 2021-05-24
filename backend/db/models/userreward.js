'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserReward = sequelize.define('UserReward', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rewardId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  UserReward.associate = function(models) {
    // associations can be defined here
  };
  return UserReward;
};
