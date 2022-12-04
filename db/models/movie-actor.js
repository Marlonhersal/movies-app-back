const { Model, DataTypes, Sequelize } = require('sequelize');
const { MOVIE_TABLE } = require('./movie.models')
const {ACTOR_TABLE} = require('./actor.model')
const MOVIE_ACTOR_TABLE = 'movies_actors';
const MovieActorsSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  movieId: {
    field: 'movie_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  actorId: {
    field: 'actor_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ACTOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class MovieActor extends Model {

  static associate(models) {
    
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_ACTOR_TABLE,
      modelName: 'MovieActor',
      timestamps: false
    }
  }
}

module.exports = { MovieActor, MovieActorsSchema, MOVIE_ACTOR_TABLE }