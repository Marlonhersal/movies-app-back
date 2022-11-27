//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const UsersService = require('./../services/users.service');
const service = new UsersService();

router.get('/', async (req, res, next)=>{
    try{
        const response = await service.find();
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.get('/:id', async (req, res, next)=>{
    try{
        const response = await service.findOne(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.post('/', async (req, res, next)=>{
    try{
        const {email,password,name, age, role} = req.body;
        const response = await service.create(email,password,name, age, role);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.patch('/:id', async (req, res, next)=>{
    try{
        const response = await service.update(req.params.id,req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

router.delete('/:id', async (req, res, next)=>{
    try{
        const response = await service.delete(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});



module.exports = router