const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // make sure this exports your Sequelize instance

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // optional: ensures it's a valid email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  timestamps: true, // automatically adds createdAt and updatedAt fields
});

module.exports = User;