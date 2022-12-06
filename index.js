//Express
const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

const cors = require('cors');

//Routing
const routerApi = require('./routes/index')
//Importando Middlewares
const {errorHandler,boomErrorHandler, queryErrorHandler} = require('./middlewares/error.handler')


//Convirtiendo las repuestas en JSON
app.use(express.json());

app.use(cors());

app.get('/', (req, res)=>{
    res.send('API DE PELÍCULAS')
})

//Conectando con el Routing
routerApi(app)

//Llamado a los Middlewares

app.use(boomErrorHandler)
app.use(queryErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto ' + port)
});

module.exports = app 