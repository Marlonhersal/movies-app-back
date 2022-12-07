//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const actorsService = require('./../services/actors.service');
const service = new actorsService();
//Validador de schemas
const validatorHandler = require('../middlewares/validator.handler');
const {checkAdminRole} = require('../middlewares/auth.handler');
const {createActorSchema,updateActorSchema,getActorSchema} = require('../schemas/actor.schema');


const passport = require('passport')

router.get('/',async (req, res, next)=>{
    try{
        const response = await service.find();
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.get('/:id',
    validatorHandler(getActorSchema, 'params')
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
    checkAdminRole
    ,
    validatorHandler(createActorSchema, 'body')
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
    validatorHandler(getActorSchema, 'params'),
    validatorHandler(updateActorSchema, 'body')
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
    validatorHandler(getActorSchema, 'params')
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