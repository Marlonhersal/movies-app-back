const {faker} =  require('@faker-js/faker')
const boom = require('@hapi/boom');



class UsersService {
    constructor (){
        this.users = []
        this.count = 0
        for(let i = 0; i < 30; i++){
            this.users.push({
                idUser: ++this.count,
                email: faker.internet.email() ,
                password: "contraseña",
                name: faker.name.firstName(),
                age:"12",
                role:  this.count % 2 ? 'client' : 'admin'
            })
        }
    }
    
    async find(){
        return this.users;
    }
    async findOne(id){
        const user = this.users.find((user)=>{
            return user.idUser == id
        })
        if(!user) throw boom.notFound('El Usuario no existe')
        return user
    }
    async create({email,password,name, age, role}){
        let newUser = {
            idUser: ++this.count,
            email,password,name, age, role
        }

        this.users.push(newUser);

        return newUser;
    }
    async update(id, changes){
        const user = await this.findOne(id)
        const index = this.users.findIndex((user)=>{
            return user.idUser == id
        })
        
        const updateUser = {
            ...user,
            ...changes
        }

        this.users[index] = updateUser;

        return updateUser;
    }
    async delete(id){
        await this.findOne(id)
        const newUsers = this.users.filter((user)=>{
            return user.idUser != id
        })
3
        this.users = newUsers
        return this.users;
    }
}

module.exports = UsersService;