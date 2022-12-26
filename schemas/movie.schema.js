//Libreria para la validación
const Joi = require("joi");

//Atributos
const id = Joi.number().integer();
const name = Joi.string();
const year = Joi.number().integer();
const country = Joi.string();
const description = Joi.string();
const poster = Joi.string();
const directorId = Joi.number().integer();
const movieId = Joi.number().integer();
const actorId = Joi.number().integer();

//Creación de pelicula
const createMovieSchema = Joi.object({
  name: name.required(),
  year: year.required(),
  country: country.required(),
  description: description.required(),
  poster: poster.required(),
  directorId: directorId.required(),
});
//Agregar actor a pelicula
const createMovieActorSchema = Joi.object({
  movieId: movieId.required(),
  actorId: actorId.required(),
});

//Actualizar pelicula
const updateMovieSchema = Joi.object({
  name,
  year,
  country,
  description,
  poster,
  directorId,
});

//Obtener detalles de una pelicula
const getMovieSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createMovieSchema,
  updateMovieSchema,
  getMovieSchema,
  createMovieActorSchema,
};
