//Libreria para la validación
const Joi = require("joi");

//Atributos
const id = Joi.number().integer();
const name = Joi.string();
const country = Joi.string();
const birthdate = Joi.date().iso();
const description = Joi.string().min(400).max(500);
const image = Joi.string();

//Creación de actores
const createDirectorSchema = Joi.object({
  name: name.required(),
  birthdate: birthdate.required(),
  country: country.required(),
  description: description.required(),
  image: image.required(),
});

//Actualización de actores
const updateDirectorSchema = Joi.object({
  name,
  birthdate,
  country,
  description,
  image
});

//Obtener detalles de un actor
const getDirectorSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createDirectorSchema,
  updateDirectorSchema,
  getDirectorSchema,
};
