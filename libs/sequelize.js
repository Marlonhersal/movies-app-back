const { Sequelize } = require('sequelize');
const setupModels = require('../db/models')

const {config}= require('../config/config')
const URI = config.dbUrl

let options = {
    dialect: 'postgres',
    logging: config.isProd ? false: true,
}

if(config.isProd){
    options.dialectOptions ={
        ssl: {
        rejectUnauthorized:false
        }
    }
}

const sequelize = new Sequelize(URI,options)

//Implementando los modelos a la base de datos
setupModels(sequelize)

module.exports = sequelize;