const {User, UserSchema} = require('./user.model');
const {Director, DirectorSchema} = require('./director.models')
const {Movie, MovieSchema} = require('./movie.models')
const {Actor, ActorSchema} = require('./actor.model')
const {MovieActor, MovieActorsSchema} = require('./movie-actor')


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))

    Director.init(DirectorSchema, Director.config(sequelize))
    Movie.init(MovieSchema, Movie.config(sequelize))
    Actor.init(ActorSchema, Actor.config(sequelize))
    MovieActor.init(MovieActorsSchema, MovieActor.config(sequelize))

    Director.associate(sequelize.models)
    Movie.associate(sequelize.models)
    Actor.associate(sequelize.models)
    MovieActor.associate(sequelize.models)
}

module.exports = setupModels;