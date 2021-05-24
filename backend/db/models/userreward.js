'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserReward = sequelize.define("UserReward", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    },
    rewardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Rewards",
        key: "id"
      }
    }
  }, {});
  UserReward.associate = function(models) {
    // associations can be defined here
  };
  return UserReward;
};
