const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const {DIRECTOR_TABLE} = require('./director.models')

const MovieSchema = {
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
    poster: {
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
  };

class Movie extends Model {
    static associate(models) {
        this.belongsTo(models.Director, {as: 'director'});

        this.belongsToMany(models.Actor, {
          as: 'actor',
          through: models.MovieActor,
          foreignKey: 'movieId',
          otherKey: 'actorId'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Movie',
            timeStamps: false
        }
    }
}

module.exports = {MOVIE_TABLE,MovieSchema, Movie}