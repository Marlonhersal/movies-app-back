'use strict';

const {ActorSchema, ACTOR_TABLE} = require('../models/actor.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable(ACTOR_TABLE, ActorSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ACTOR_TABLE)
  }
};
