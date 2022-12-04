const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize')

class directorsService {
    constructor (){
    }
    async find(){
        const response = await models.Director.findAll()
        return response;
    }
    async findOne(id){
        const director = await models.Director.findByPk(id, {
            include: 'movie'
        })
        if(!director) throw boom.notFound('El Director no existe')
        return director
    }
    async create(data){
        const newUser = await models.Director.create(data)
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

module.exports = directorsService;