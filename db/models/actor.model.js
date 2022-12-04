const { Model, DataTypes, Sequelize } = require('sequelize');

const ACTOR_TABLE = 'actors';

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
      unique: true,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER(),
      defaultValue: 18
    },
    country: {
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

class Actor extends Model {
    static associate(models) {
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: ACTOR_TABLE,
            modelName: 'Actor',
            timeStamps: false
        }
    }
}

module.exports = {ACTOR_TABLE,ActorSchema, Actor}