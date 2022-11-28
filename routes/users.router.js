//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const UsersService = require('./../services/users.service');
const service = new UsersService();

//Validador de schemas
const validatorHandler = require('../middlewares/validator.handler');
const {getUserSchema,createUserSchema,updateUserSchema} = require('../schemas/users.schema');


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
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.patch('/:id',
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