//Libreria para la validación
const Joi = require("joi");

//Atributos
const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const name = Joi.string();
const role = Joi.string().valid("customer", "admin");

//Creación de usuario
const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

//Actualizar usuario
const updateUserSchema = Joi.object({
  name,
  email,
  password,
  role
});
//Detalles de un usuario
const getUserSchema = Joi.object({
  id: id.required(),
});

//Detalles de un usuario
const loginSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

module.exports = { loginSchema,createUserSchema, getUserSchema, updateUserSchema };
