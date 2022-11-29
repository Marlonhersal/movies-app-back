const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');

class directorsService {
    constructor (){
        this.directors = []
        this.generate();
        
    }
    generate() {
        let count = 0
        for(let i = 0; i < 30; i++){
            let director = {
                idDirector: ++count,
                name: faker.name.findName(),
                age:faker.datatype.number({ min: 20, max: 60 }) ,
                country:  faker.address.country(),
                image: faker.image.image(),
                movies: [],
            }
            for(let i = 0; i < 5; i++){
                director.movies.push(faker.music.songName())
            }
            this.directors.push(director)
        }
    }
    async find(){
        return this.directors;
    }
    async findOne(id){
        const director = this.directors.find((director)=>{
            return director.idDirector == id
        })
        if(!director) throw boom.notFound('La director no existe')
        return director
    }
    async create({name, age, country, image, movies}){
        let newdirector = {
            idDirector: ++this.count,
            name, age, country, image, movies
        }

        this.directors.push(newdirector);

        return newdirector;
    }
    async update(id, changes){
        const director = await this.findOne(id)
        const index = this.directors.findIndex((director)=>{
            return director.idDirector == id
        })
        const updatedirector = {
            ...director,
            ...changes
        }
        this.directors[index] = updatedirector;
        return updatedirector;
    }
    async delete(id){
        await this.findOne(id)
        const newdirector = this.directors.filter((director)=>{
            return director.idDirector != id
        })
        this.directors = newdirector
        return this.directors;
    }
}

module.exports = directorsService;