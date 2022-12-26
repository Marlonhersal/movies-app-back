//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const UsersService = require('./../services/users.service');
const service = new UsersService();

//Validador de schemas
const {checkAdminRole} = require('../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler');
const {getUserSchema,createUserSchema,updateUserSchema} = require('../schemas/user.schema');

//JWT
const passport = require('passport')

router.get('/',
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
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
    validatorHandler(getUserSchema, 'params')
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
    validatorHandler(createUserSchema, 'body')
    ,async (req, res, next)=>{
    try{
        const response = await service.create(req.body);
        res.status(200).json(response)
    }
    catch(err){
        next(err)
    }
});

router.patch('/:id',
    passport.authenticate('jwt', {session:false}),
    checkAdminRole,
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body')
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
    validatorHandler(getUserSchema, 'params')
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