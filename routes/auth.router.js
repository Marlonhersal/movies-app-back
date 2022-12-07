//Express
const express = require('express')
//Rutas
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {config} = require('../config/config');


router.post('/login',
    passport.authenticate('local', {session:false})
    ,
    async (req, res, next)=>{
    try{
        const user = req.user;
        const payload = {
            sub: user.id,
            role: user.role
        }
        const token = jwt.sign(payload, config.jwtSecret)
        res.json({
            user,
            token
        })
    }
    catch(err){
        next(err)
    }
});

module.exports = router