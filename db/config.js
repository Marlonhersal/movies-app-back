const {config}= require('../config/config')

const URI = config.dbUrl;

module.exports = {
    production: {
        url: URI,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
              rejectUnauthorized: false
            }
          }
    },
    development: {
        url: URI,
        dialect: 'postgres',
    }
}