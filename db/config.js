const {config}= require('../config/config')

const URI = config.dbUrl;


module.exports = {
    production: {
        url: URI,
        dialect: 'postgres',
        ssl : {
            rejectUnauthorized:  false
        }
    },
    development: {
        url: URI,
        dialect: 'postgres',
        SSL : {
            rejectUnauthorized:  false
        },
    }
}