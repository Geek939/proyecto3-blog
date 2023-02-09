const {Sequelize} = require('sequelize');
const configs = require('../../config.js');

const db = new Sequelize(configs.db.development);

module.exports = db;