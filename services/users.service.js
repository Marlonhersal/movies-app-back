const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');

//Conexión a la base de datos
const {models} = require('../libs/sequelize')


class UsersService {
    constructor (){
        /* this.users = []
        this.count = 0
        this.generate() */
    }
    /* generate() {
        for(let i = 0; i < 30; i++){
            this.users.push({
                idUser: ++this.count,
                email: faker.internet.email() ,
                password: "contraseña",
                name: faker.name.firstName(),
                age:"12",
                role:  this.count % 2 ? 'c4lient' : 'admin'
            })
        }
    } */

    async find(){
        const response = await models.User.findAll()
        return response;
    }
    async findOne(id){
        const user = await models.User.findByPk(id)
        if(!user) throw boom.notFound('El Usuario no existe')
        return user
    }
    async create(data){
        const newUser = await models.User.create(data)
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