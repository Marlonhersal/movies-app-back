//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const moviesService = require('./../services/movies.service');
const service = new moviesService();
//Validador de schemas
const {checkAdminRole} = require('../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler');
const {getMovieSchema,createMovieSchema,updateMovieSchema, createMovieActorSchema} = require('../schemas/movie.schema');
//JWT
const passport = require('passport')

router.get('/', 
    passport.authenticate('jwt', {session:false})
    ,async (req, res, next)=>{
    try{
        const response = await service.find();
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.get('/:id',
    validatorHandler(getMovieSchema, 'params')
    ,async (req, res, next)=>{
    try{
        const response = await service.findOne(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.post('/',
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
    validatorHandler(createMovieSchema, 'body'),
    async (req, res, next)=>{
    try{
        const response = await service.create(req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.post('/add-actor',
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
    validatorHandler(createMovieActorSchema, 'body'),
    async (req, res, next)=>{
    try{
        const response = await service.addActor(req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.patch('/:id',
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
    validatorHandler(getMovieSchema, 'params'),
    validatorHandler(updateMovieSchema, 'body')
    ,async (req, res, next)=>{
    try{
        const response = await service.update(req.params.id,req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.delete('/:id',
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
    validatorHandler(getMovieSchema, 'params')
    , async (req, res, next)=>{
    try{
        const response = await service.delete(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

module.exports = router