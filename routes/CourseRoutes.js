//
const express =require('express');
const { 
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse
 } = require('../controllers/CoursesController');
//definir objeto de ruteo

const router = express.Router()

router.route('/')
 .get(getAllCourses)
 .post(createCourse)

//Crear rutas con parametros
router.route('/:id')
 .get(getSingleCourse)
 .put(updateCourse)
 .delete(deleteCourse)

module.exports = router