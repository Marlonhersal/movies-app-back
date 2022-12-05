'use strict';

const { DataTypes} = require('sequelize');

const {MovieSchema, MOVIE_TABLE} = require('../models/movie.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* await queryInterface.createTable(MOVIE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      year: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      directorId: {
          field: 'director_id',
          allowNull: false,
          type: DataTypes.INTEGER,
          unique: false,
          references: {
          model: DIRECTOR_TABLE,
          key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
      ,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
      }
    }) */
  },

  async down (queryInterface, Sequelize) {
    /* await queryInterface.dropTable(MOVIE_TABLE) */
  }
};
