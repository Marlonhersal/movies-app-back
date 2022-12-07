//Express
const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

const cors = require('cors');

//Routing
const routerApi = require('./routes/index')
//Importando Middlewares
const {errorHandler,boomErrorHandler, queryErrorHandler} = require('./middlewares/error.handler')
const {checkApiKey} = require('./middlewares/auth.handler');
const { request } = require('express');


//Convirtiendo las repuestas en JSON
app.use(express.json());

app.use(cors());

require('./utils/auth/index')

app.get('/', (req, res)=>{
    res.send('API DE PELÍCULAS')
})
app.get('/test',
    checkApiKey
    ,(req, res)=>{
    res.send('Autorizado')
})

//Conectando con el Routing
routerApi(app)

//Llamado a los Middlewares

app.use(boomErrorHandler)
app.use(queryErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto ' + port )
});

module.exports = app 