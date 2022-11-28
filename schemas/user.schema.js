const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const name = Joi.string();
const age = Joi.number().integer();
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
    email:email.required(),
    password:password.required(),
    name:name.required(),
    age:age.required(),
    role:role.required(),
});

const updateUserSchema = Joi.object({
    email,password,name,age,role
  });

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = {createUserSchema, getUserSchema,updateUserSchema};