//Express
const express = require('express')
//Rutas
const {serialize} = require('cookie')
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
            name: user.name,
            email: user.email
        }
        const token = jwt.sign(payload, config.jwtSecret)
       /*  const cookie = serialize('TokenJWT', token,{
            httpOnly:true,
            secure: config.isProd? true: false,
            sameSite: 'none',
            maxAge: 1000 *60 *60*24*30,
            path: '/'
        }) */
        //res.cookie('tokens', token, { domain: 'http://localhost:3005/', path: '/login' })
        res.json({
            message: "Usuario logeado correctamenre",
            token
        })

    }
    catch(err){
        next(err)
    }
});

module.exports = router