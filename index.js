//Express
const express = require('express');
const app = express();
const port = 3000;
//Routing
const routerApi = require('./routes')



//Convirtiendo las repuestas en JSON
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('API REST DE PELÍCULAS')
})

//Conectando con el Routing
routerApi(app)

app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto ' + port)
});