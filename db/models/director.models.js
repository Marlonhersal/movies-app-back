const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require('moment');

const DIRECTOR_TABLE = "directors";

const DirectorSchema = {
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
};

class Director extends Model {
  static associate(models) {
    this.hasMany(models.Movie, { as: "movie", foreignKey: "directorId" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DIRECTOR_TABLE,
      modelName: "Director",
      timeStamps: false,
    };
  }
}

module.exports = { DIRECTOR_TABLE, DirectorSchema, Director };
