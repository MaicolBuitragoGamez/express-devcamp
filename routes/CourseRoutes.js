const express  = require('express');

//Definir objeto de ruteo
const router = express.Router();

// Las rutas de todos los courses
router.get('/api/v1/course', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "aquí van a salir todos los courses"
        });
});

// Listar course por id
router.get('/api/v1/course/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a salir el course cuyo id es ${req.params.id}`
        });
});

//Actualizar course por id
router.put('/api/v1/course/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a actualizarse el course cuyo id es ${req.params.id}`
        });
});

//Eliminar un course por id
router.delete('/api/v1/course/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a eliminar el course cuyo id es ${req.params.id}`
        });
});

module.exports = router