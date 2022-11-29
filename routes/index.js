//Express
const express = require('express');

//Ruta de Users
const usersRouter = require('./users.router')
const moviesRouter = require('./movies.router')
const directorsRouter = require('./directors.router')
const actorsRouter = require('./actors.router')

function routerApi(app){
    const router = express.Router();
    app.use('/movies', router)

    //Definiendo rutas
    router.use('/users', usersRouter)
    router.use('/movies', moviesRouter)
    router.use('/directors', directorsRouter)
    router.use('/actors', actorsRouter)
}

module.exports = routerApi;