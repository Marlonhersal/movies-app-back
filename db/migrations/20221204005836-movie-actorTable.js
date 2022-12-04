'use strict';

const {MovieActorsSchema, MOVIE_ACTOR_TABLE} = require('../models/movie-actor')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable(MOVIE_ACTOR_TABLE, MovieActorsSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MOVIE_ACTOR_TABLE)
  }
};
