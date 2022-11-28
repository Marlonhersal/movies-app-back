const Joi = require('joi');

const id = Joi.number().integer();

const name = Joi.string();
const age = Joi.number().integer();
const country = Joi.string();
const image = Joi.string();
const movies = Joi.array();

const createDirectorSchema = Joi.object({
    name: name.required(),
    age: age.required(),
    country: country.required(),
    image: image.required(),
    movies: movies.required()
})

const updateDirectorSchema = Joi.object({
    name, age, country, image, movies
  });

const getDirectorSchema = Joi.object({
    id: id.required()
})

module.exports = {createDirectorSchema, updateDirectorSchema,getDirectorSchema};