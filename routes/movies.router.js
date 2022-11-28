//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const moviesService = require('./../services/movies.service');
const service = new moviesService();
//Validador de schemas
const validatorHandler = require('../middlewares/validator.handler');
const {getMovieSchema,createMovieSchema,updateMovieSchema} = require('../schemas/movies.schema');

router.get('/', async (req, res, next)=>{
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
    validatorHandler(createMovieSchema, 'body'),
    async (req, res, next)=>{
    try{
        const {name,director,actors,clasificacion,category, presentacion, poster} = req.body;
        const response = await service.create(name,director,actors,clasificacion,category, presentacion, poster);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.patch('/:id',
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