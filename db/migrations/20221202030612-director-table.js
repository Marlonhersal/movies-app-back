'use strict';

const {DirectorSchema, DIRECTOR_TABLE} = require('../models/director.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DIRECTOR_TABLE, DirectorSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(DIRECTOR_TABLE)
  }
};
