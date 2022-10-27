//
const express =require('express');
const { 
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
 } = require('../controllers/UserController');
//definir objeto de ruteo

const router = express.Router()

router.route('/')
 .get(getAllUsers)
 .post(createUser)

//Crear rutas con parametros
router.route('/:id')
 .get(getSingleUser)
 .put(updateUser)
 .delete(deleteUser)

module.exports = router