//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const directorsService = require('./../services/directors.service');
const service = new directorsService();
//Validador de schemas
const {checkAdminRole} = require('../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler');
const {createDirectorSchema,updateDirectorSchema,getDirectorSchema} = require('../schemas/director.schema');

//jwt
const passport = require('passport')

router.get('/',
    passport.authenticate('jwt', {session:false}),
    async (req, res, next)=>{
    try{
        const response = await service.find();
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.get('/:id',
    passport.authenticate('jwt', {session:false}),
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
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
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
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
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
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
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