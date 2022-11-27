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
        console.log(err)
    }
});

module.exports = router