'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reward = sequelize.define('Reward', {
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Projects",
        key: "id"
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Reward.associate = function(models) {
    Reward.belongsTo(models.Project, { foreignKey: "projectId" });
    Reward.belongsToMany(models.User, {
      through: "UserReward",
      otherKey: "userId",
      foreignKey: "rewardId"
    })
  };
  return Reward;
};
