"use strict";

/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require("sequelize");

const { UserSchema, USER_TABLE } = require("../models/user.model");
const { DIRECTOR_TABLE } = require("../models/director.models");
const { MovieSchema, MOVIE_TABLE } = require("../models/movie.models");
const { ACTOR_TABLE } = require("../models/actor.model");
const {MovieActorsSchema,MOVIE_ACTOR_TABLE} = require("../models/movie-actor");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(DIRECTOR_TABLE, {
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
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(MOVIE_TABLE, MovieSchema);
    await queryInterface.createTable(ACTOR_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      birthdate: {
        allowNull:false,
        type: DataTypes.DATE,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      description:{
        allowNull:false,
        type: DataTypes.STRING,
        unique: false,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(MOVIE_ACTOR_TABLE, MovieActorsSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(DIRECTOR_TABLE);
    await queryInterface.dropTable(MOVIE_TABLE);
    await queryInterface.dropTable(ACTOR_TABLE);
    await queryInterface.dropTable(MOVIE_ACTOR_TABLE);
  },
};
