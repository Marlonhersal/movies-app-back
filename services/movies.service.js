const { faker } = require("@faker-js/faker");

const boom = require("@hapi/boom");

const { models } = require("../libs/sequelize");

class moviesService {
  constructor() {}

  async find() {
    const response = await models.Movie.findAll({ include: "actors" });
    return response;
  }
  async findOne(id) {
    const movie = await models.Movie.findByPk(id,{ include: ["actors", "director"] });
    if (!movie) throw boom.notFound("La película no existe");
    return movie;
  }
  async create(data) {
    const newMovie = await models.Movie.create(data);
    return newMovie;
  }
  async addActor(data) {
    const newMovieActor = await models.MovieActor.create(data);
    return newMovieActor;
  }
  async removeActor(id) {
    const relacion = await models.MovieActor.findByPk(id);
    if (!relacion) throw boom.notFound("El actor no está asociado a la pelicula");
    await relacion.destroy()
    return id;
  }
  async update(id, changes) {
    const movie = await this.findOne(id);
    const response = await movie.update(changes);
    return response;
  }
  async delete(id) {
    const movie = await this.findOne(id);
    await movie.destroy();

    return id;
  }
}

module.exports = moviesService;
