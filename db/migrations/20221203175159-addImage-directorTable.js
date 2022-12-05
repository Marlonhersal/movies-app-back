'use strict';
const { DataTypes} = require('sequelize');
const {DirectorSchema, DIRECTOR_TABLE} = require('../models/director.models')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    /* await queryInterface.addColumn(DIRECTOR_TABLE,'image', {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    }) */
  },

  async down (queryInterface, Sequelize) {
    //await queryInterface.removeColumn(DIRECTOR_TABLE, 'image')
  }
};
