const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const director = Joi.string();
const actors = Joi.array();
const clasificacion = Joi.number().integer();
const category = Joi.string().min(5);
const presentacion = Joi.string();
const poster = Joi.string();

const createMovieSchema = Joi.object({
    name: name.required(),
    director: director.required(),
    actors: actors.required(),
    clasificacion: clasificacion.required(),
    category: category.required(),
    presentacion: presentacion.required(), 
    poster: poster.required()
})

const updateMovieSchema = Joi.object({
    name,director,actors,clasificacion,category, presentacion, poster
  });

const getMovieSchema = Joi.object({
    id: id.required()
})

module.exports = {createMovieSchema, updateMovieSchema,getMovieSchema};