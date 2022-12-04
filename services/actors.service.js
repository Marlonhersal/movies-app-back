const {faker} =  require('@faker-js/faker')

const boom = require('@hapi/boom');

//Conexión a la base de datos
const {models} = require('../libs/sequelize')

class actorsService {
    constructor (){
    }
    async find(){
        const response = await models.Actor.findAll()
        return response;
    }
    async findOne(id){
        const director = await models.Actor.findByPk(id)
        if(!director) throw boom.notFound('El actor no existe')
        return director
    }
    async create(data){
        const newUser = await models.Actor.create(data)
        return newUser;
    }
    async update(id, changes){
        const director =  await this.findOne(id);
        const response = await director.update(changes)
        return response;
    }
    async delete(id){
        const director = await this.findOne(id)
        await director.destroy()

        return id;
    }
}

module.exports = actorsService;