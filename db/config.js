const {config}= require('../config/config')

const URI = config.dbUrl;


module.exports = {

    production: {
        url: URI,
        dialect: 'postgres',
        ssl : {
            rejectUnauthorized:  false
        }
    }
}