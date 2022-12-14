const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require('moment');

const ACTOR_TABLE = "actors";

const ActorSchema = {
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
  age: {
    type: DataTypes.VIRTUAL,
    get() {
      return moment().diff(this.birthdate, "years");
    },
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
};

class Actor extends Model {
  static associate(models) {
    this.belongsToMany(models.Movie, {
      as: "movies",
      through: models.MovieActor,
      foreignKey: "actorId",
      otherKey: "movieId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTOR_TABLE,
      modelName: "Actor",
      timeStamps: false,
    };
  }
}

module.exports = { ACTOR_TABLE, ActorSchema, Actor };
