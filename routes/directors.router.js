//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const directorsService = require('./../services/directors.service');
const service = new directorsService();
//Validador de schemas
const validatorHandler = require('../middlewares/validator.handler');
const {createDirectorSchema,updateDirectorSchema,getDirectorSchema} = require('../schemas/director.schema');

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
    validatorHandler(getDirectorSchema, 'params')
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
    validatorHandler(createDirectorSchema, 'body')
    ,async (req, res, next)=>{
    try{
        const response = await service.create(req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.patch('/:id', 
    validatorHandler(getDirectorSchema, 'params'),
    validatorHandler(updateDirectorSchema, 'body')
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
    validatorHandler(getDirectorSchema, 'params')
    ,async (req, res, next)=>{
    try{
        const response = await service.delete(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

module.exports = router