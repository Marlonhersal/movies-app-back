const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { where } = require('sequelize');

//Conexión a la base de datos
const {models} = require('../libs/sequelize')


class UsersService {
    
    async find(){
        const response = await models.User.findAll()
        return response;
    }
    async findByEmail(email){
        const response = await models.User.findOne(
            {where: {email}}
        )
        return response;
    }
    async findOne(id){
        const user = await models.User.findByPk(id)
        if(!user) throw boom.notFound('El Usuario no existe')
        return user
    }
    async create(data){
        const hash = await bcrypt.hash(data.password, 10)
        const newUser = await models.User.create({
            ...data,
        password: hash}
        )
        delete newUser.dataValues.password
        return newUser;
    }
    async update(id, changes){
   
        const user = await this.findOne(id);
        const response = await user.update(changes)
        return response;
    }
    async delete(id){
        const user = await this.findOne(id)
        await user.destroy()

        return id;
    }
}

module.exports = UsersService;