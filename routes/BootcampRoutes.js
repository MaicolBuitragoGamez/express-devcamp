const express  = require('express');

//Definir objeto de ruteo
const router = express.Router();

// Las rutas de todos los bootcamps
router.get('/api/v1/bootcamp', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "aquí van a salir todos los bootcamps"
        });
});

// Listar bootcamp por id
router.get('/api/v1/bootcamp/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a salir el bootcamp cuyo id es ${req.params.id}`
        });
});

//Actualizar bootcamp por id
router.put('/api/v1/bootcamp/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        });
});

//Eliminar un bootcamp por id
router.delete('/api/v1/bootcamp/:id', (req, res)=>{
    console.log(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": `aquí va a eliminar el bootcamp cuyo id es ${req.params.id}`
        });
});

module.exports = router