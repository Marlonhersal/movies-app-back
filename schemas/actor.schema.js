const Joi = require('joi');

const id = Joi.number().integer();

const name = Joi.string();
const age = Joi.number().integer();
const country = Joi.string();
const image = Joi.string();


const createActorSchema = Joi.object({
    name: name.required(),
    age: age.required(),
    country: country.required(),
    image: image.required()
})

const updateActorSchema = Joi.object({
    name, age, country, image
  });

const getActorSchema = Joi.object({
    id: id.required()
})

module.exports = {createActorSchema, updateActorSchema,getActorSchema};