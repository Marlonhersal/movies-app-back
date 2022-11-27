const {faker} =  require('@faker-js/faker')

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
}

module.exports = UsersService;