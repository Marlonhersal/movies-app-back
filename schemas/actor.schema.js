//Libreria para la validación
const Joi = require("joi");

//Atributos
const id = Joi.number().integer();
const name = Joi.string();
const country = Joi.string();
const birthdate = Joi.date().iso();
const description = Joi.string();
const image = Joi.string();

//Creación de actores
const createActorSchema = Joi.object({
  name: name.required(),
  birthdate: birthdate.required(),
  country: country.required(),
  description: description.required(),
  image: image.required(),
});

//Actualización de actores
const updateActorSchema = Joi.object({
  name,
  birthdate,
  country,
  description,
  image,
});

//Obtener detalles de un actor
const getActorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createActorSchema, updateActorSchema, getActorSchema };
