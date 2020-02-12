const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const rutas = (router) =>{
    router.get('/agregar', function(request, response)
    {
        response.json({exito:true});
    });

    router.post('/agregar', function(request, response)
    {
        response.json({nombre:request.body.nombre, exito: true});
    });
}

rutas(app);

const server = app.listen(8080);

