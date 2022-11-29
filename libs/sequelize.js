const { Sequelize } = require('sequelize');

const {config}= require('../config/config')

const URI = config.dbUrl;

const sequelize = new Sequelize(URI,{
    dialect: 'postgres',
    logging: true
}
)

module.exports = sequelize;