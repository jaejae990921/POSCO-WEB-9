const { DataTypes, Sequelize } = require('sequelize');

const Todo = (sequelize) => {
  return sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    done: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 0,
    },
  });
};

module.exports = Todo;
