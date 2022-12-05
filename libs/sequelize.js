const { Sequelize } = require('sequelize');
const setupModels = require('../db/models')

const {config}= require('../config/config')
const URI = config.dbUrl

const sequelize = new Sequelize(URI,{
    dialect: 'postgres',
    logging: false
})

//Implementando los modelos a la base de datos
setupModels(sequelize)

module.exports = sequelize;