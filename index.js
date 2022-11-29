//Express
const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

const cors = require('cors');

//Routing
const routerApi = require('./routes/index')
//Importando Middlewares
const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler')

//Ruta de Users
const usersRouter = require('./routes/users.router')
const moviesRouter = require('./routes/movies.router')
const directorsRouter = require('./routes/directors.router')
const actorsRouter = require('./routes/actors.router')



//Convirtiendo las repuestas en JSON
app.use(express.json());

app.use(cors());

app.get('/', (req, res)=>{
    res.send('API DE PELÍCULAS')
})

//Conectando con el Routing
//routerApi(app)


app.use('/users', usersRouter)
app.use('/movies', moviesRouter)
app.use('/directors', directorsRouter)
app.use('/actors', actorsRouter)

//Llamado a los Middlewares

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto ' + port)
});

module.exports = app 