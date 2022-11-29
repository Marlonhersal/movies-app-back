const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');

class actorsService {
    constructor (){
        this.actors = [],
        this.count = 0
        this.generate()
    }
    generate() {
        
        for(let i = 0; i < 30; i++){
            let actor = {
                idActor: ++this.count,
                name: faker.name.findName(),
                age:faker.datatype.number({ min: 20, max: 60 }) ,
                country:  faker.address.country(),
                image: faker.image.image(),
                movies: [],
            }
            for(let i = 0; i < 5; i++){
                actor.movies.push(faker.music.songName())
            }
            this.actors.push(actor)
        }
    }
    
    async find(){
        return this.actors;
    }
    async findOne(id){
        const actor = this.actors.find((actor)=>{
            return actor.idActor == id
        })
        if(!actor) throw boom.notFound('El actor no existe')
        return actor
    }
    async create({name, age, country, image, movies}){
        let newactor = {
            idActor: ++this.count,
            name, age, country, image, movies
        }

        this.actors.push(newactor);

        return newactor;
    }
    async update(id, changes){
        const actor = await this.findOne(id)
        const index = this.actors.findIndex((actor)=>{
            return actor.idActor == id
        })
        const updateactor = {
            ...actor,
            ...changes
        }
        this.actors[index] = updateactor;
        return updateactor;
    }
    async delete(id){
        await this.findOne(id)
        const newactor = this.actors.filter((actor)=>{
            return actor.idActor != id
        })
        this.actors = newactor
        return this.actors;
    }
}

module.exports = actorsService;