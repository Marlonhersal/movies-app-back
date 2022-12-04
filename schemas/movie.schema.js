const Joi = require('joi');

const id = Joi.number().integer();

const name = Joi.string();
const year = Joi.number().integer();
const country = Joi.string();
const poster = Joi.string();
const directorId = Joi.number().integer();
const movieId = Joi.number().integer();
const actorId = Joi.number().integer();

const createMovieSchema = Joi.object({
    name: name.required(),
    year: year.required(),
    country: country.required(),
    poster: poster.required(),
    directorId: directorId.required()
})
const createMovieActorSchema = Joi.object({
    movieId: movieId.required(),
    actorId: actorId.required()
})

const updateMovieSchema = Joi.object({
    name, year,  country, poster, directorId,
  });

const getMovieSchema = Joi.object({
    id: id.required()
})

module.exports = {createMovieSchema, updateMovieSchema,getMovieSchema, createMovieActorSchema};