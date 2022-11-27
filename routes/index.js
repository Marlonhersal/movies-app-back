//Express
const express = require('express');

//Ruta de Users
const usersRouter = require('./users.router')

function routerApi(app){
    const router = express.Router();
    app.use('/', router)

    //Definiendo rutas
    router.use('/users', usersRouter)
}

module.exports = routerApi;