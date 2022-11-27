const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');

class moviesService {
    constructor (){
        this.movies = []
        this.count = 0
        for(let i = 0; i < 30; i++){
            let pelicula = {
                idMovie: ++this.count,
                name: faker.music.songName()  ,
                director: faker.name.findName(),
                actors: [],
                clasificacion:faker.datatype.number({ min: 6, max: 18 }) ,
                category:  this.count % 2 ? 'acción' : 'terror',
                presentacion: faker.lorem.lines(),
                poster: faker.image.image()
            }
            for(let i = 0; i < 5; i++){
                pelicula.actors.push(faker.name.findName(),)
            }
            this.movies.push(pelicula)
        }
    }
    
    async find(){
        return this.movies;
    }
    async findOne(id){
        const movie = this.movies.find((movie)=>{
            return movie.idMovie == id
        })
        if(!movie) throw boom.notFound('La pelicula no existe')
        return movie
    }
    async create(name,director,actors,clasificacion,category, presentacion, poster){
        let newMovie = {
            idMovie: ++this.count,
            name,director,actors,clasificacion,category, presentacion, poster
        }

        this.movies.push(newMovie);

        return newMovie;
    }
    async update(id, changes){
        const movie = await this.findOne(id)
        const index = this.movies.findIndex((movie)=>{
            return movie.idMovie == id
        })
        const updateMovie = {
            ...movie,
            ...changes
        }
        this.movies[index] = updateMovie;
        return updateMovie;
    }
    async delete(id){
        await this.findOne(id)
        const newMovie = this.movies.filter((movie)=>{
            return movie.idMovie != id
        })
        this.movies = newMovie
        return this.movies;
    }
}

module.exports = moviesService;