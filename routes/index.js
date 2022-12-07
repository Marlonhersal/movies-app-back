//Express
const express = require('express');

//Ruta de Users
const usersRouter = require('./users.router')
const moviesRouter = require('./movies.router')
const directorsRouter = require('./directors.router')
const actorsRouter = require('./actors.router')
const authRouter = require('./auth.router')

function routerApi(app){
    const router = express.Router();
    app.use('/', router)
    //Definiendo rutas
    router.use('/users', usersRouter)
    router.use('/movies', moviesRouter)
    router.use('/directors', directorsRouter)
    router.use('/actors', actorsRouter)
    router.use('/auth', authRouter)
}

module.exports = routerApi;