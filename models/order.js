// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  produkId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deskripsi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  namaProduk: {
    type: DataTypes.STRING,
    allowNull: false
  },
  harga: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Order;
