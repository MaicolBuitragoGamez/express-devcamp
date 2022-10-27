//1. Crear el objeto express.
const express = require('express');
//2. Citar las dependencias necesarias para el proyecto.
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const listEndpoint = require('express-list-endpoints');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/UserRoutes');

//3. Establecer archivo de configuración.
dotenv.config({
    path: './config/config.env'
});
console.log(process.env.PORT);

//Crear el objeto aplicattion
//para el servidor de desarrollo
const app = express();

//Validemos el objeto application
//para recibir datos en formato JSON
app.use(express.json())

//Conexión a db
connectDB();

//Rutas de proyecto
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/users', userRoutes);

//Crear un nuevo course
app.post('/', (require, response) =>  {
    response
            .status(200)
            .json({
                "success": true,
                "data": "request éxitosa"
            });
});

//Endpoints de dominio

//listar course por id
app.get('/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a salir el course cuyo id es ${req.params.id}`
        });
});

//Actualizar course
app.put('/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a actualizarse el course cuyo id es ${req.params.id}`
        });
});

//Borrar un course
app.delete('/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a eliminar el course cuyo id es ${req.params.id}`
        });
});


// Listar courses
app.get('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "aquí van a salir todos los courses"
        });
});


//Imprimir la lista de endpoints
//validar proyecto.
console.log(listEndpoint(app));


//Ejecutar el servidor de desarrollo
//parametros:
//      puerto de escucha - listen.
app.listen(process.env.PORT, ()=>{
    console.log(`servidor activo en puerto 5000`.random);
});