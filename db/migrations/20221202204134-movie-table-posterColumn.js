'use strict';

const { DataTypes} = require('sequelize');

const {MovieSchema, MOVIE_TABLE} = require('../models/movie.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* await queryInterface.addColumn(MOVIE_TABLE, 'poster', {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    }) */
  },

  async down (queryInterface, Sequelize) {
    //await queryInterface.removeColumn(MOVIE_TABLE, 'poster')
  }
};
