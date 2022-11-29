//Express
const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;
//Routing
const routerApi = require('./routes')
//Importando Middlewares
const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler');


//Convirtiendo las repuestas en JSON
app.use(express.json());


/* app.get('/', (req, res)=>{
    res.send('API REST DE PELÍCULAS')
})
 */

const UsersService = require('./services/users.service');
const service = new UsersService();

//Validador de schemas
const validatorHandler = require('./middlewares/validator.handler');
const {getUserSchema,createUserSchema,updateUserSchema} = require('./schemas/user.schema');


app.get('/', async (req, res, next)=>{
    try{
        const response = await service.find();
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

app.get('/:id',
    validatorHandler(getUserSchema, 'params')
    ,async (req, res, next)=>{
    try{
        const response = await service.findOne(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

app.post('/',
    validatorHandler(createUserSchema, 'body')
    ,async (req, res, next)=>{
    try{
        const response = await service.create(req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

app.patch('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body')
    ,async (req, res, next)=>{
    try{
        const response = await service.update(req.params.id,req.body);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});

app.delete('/:id', 
    validatorHandler(getUserSchema, 'params')
    ,async (req, res, next)=>{
    try{
        const response = await service.delete(req.params.id);
        res.json(response)
    }
    catch(err){
        next(err)
    }
});




//Conectando con el Routing
routerApi(app)

//Llamado a los Middlewares

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto ' + port)
});