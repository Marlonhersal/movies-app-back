//Express
const express = require("express");
//Rutas
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { config } = require("../config/config");
const validatorHandler = require('../middlewares/validator.handler');
const {loginSchema} = require('../schemas/user.schema');

router.post(
  "/login",
  validatorHandler(loginSchema, 'body'),
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      const token = jwt.sign(payload, config.jwtSecret);
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
        token,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
