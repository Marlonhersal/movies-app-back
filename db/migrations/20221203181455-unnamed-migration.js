'use strict';

const {MovieSchema, MOVIE_TABLE} = require('../models/movie.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    //await queryInterface.dropTable(MOVIE_TABLE)
  },

  async down (queryInterface, Sequelize) {

  }
};
