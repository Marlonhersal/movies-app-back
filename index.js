//Express
const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;
//Routing
const routerApi = require('./routes/index')
//Importando Middlewares
const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler')


//Convirtiendo las repuestas en JSON
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('API REST DE PELÍCULAS')
})

//Conectando con el Routing
routerApi(app)

//Llamado a los Middlewares

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto ' + port)
});

module.exports = app 