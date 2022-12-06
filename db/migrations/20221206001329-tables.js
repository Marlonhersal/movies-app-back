'use strict';

/** @type {import('sequelize-cli').Migration} */

const {UserSchema, USER_TABLE} = require('../models/user.model');
const {DirectorSchema, DIRECTOR_TABLE} = require('../models/director.models');
const {MovieSchema, MOVIE_TABLE} = require('../models/movie.models');
const {ActorSchema, ACTOR_TABLE} = require('../models/actor.model');
const {MovieActorsSchema, MOVIE_ACTOR_TABLE} = require('../models/movie-actor')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(DIRECTOR_TABLE, DirectorSchema)
    await queryInterface.createTable(MOVIE_TABLE, MovieSchema)
    await queryInterface.createTable(ACTOR_TABLE, ActorSchema)
    await queryInterface.createTable(MOVIE_ACTOR_TABLE, MovieActorsSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(DIRECTOR_TABLE)
    await queryInterface.dropTable(MOVIE_TABLE)
    await queryInterface.dropTable(ACTOR_TABLE)
    await queryInterface.dropTable(MOVIE_ACTOR_TABLE)
  }
};
