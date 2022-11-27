//Express
const express = require('express');

//Ruta de Users
const usersRouter = require('./users.router')
const moviesRouter = require('./movies.router')

function routerApi(app){
    const router = express.Router();
    app.use('/', router)

    //Definiendo rutas
    router.use('/users', usersRouter)
    router.use('/movies', moviesRouter)
}

module.exports = routerApi;