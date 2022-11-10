//
const express =require('express');
const { 
    getAllBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
 } = require('../controllers/BootcampsController');
//definir objeto de ruteo

const router = express.Router()

router.route('/')
 .get(getAllBootcamps)
 .post(createBootcamp)

//Crear rutas con parametros
router.route('/:id')
 .get(getSingleBootcamp)
 .put(updateBootcamp)
 .delete(deleteBootcamp)

module.exports = router