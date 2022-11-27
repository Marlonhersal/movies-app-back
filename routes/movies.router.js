//Express
const express = require('express')
//Rutas
const router = express.Router()
//Servicos
const moviesService = require('./../services/movies.service');
const service = new moviesService();

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
        const {name,director,actors,clasificacion,category, presentacion, poster} = req.body;
        const response = await service.create(name,director,actors,clasificacion,category, presentacion, poster);
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