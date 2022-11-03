//Dependencias:
//El objeto conexxión:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//El modelo
const UserModel = require('../models/user')

//Crear la entidad:
const User = UserModel(sequelize, DataTypes)



//listar todos los bootcamps
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200)
            .json({
                "success": true,
                "data": users
            })
    } catch (error) {
        res.status(200)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
}

//listar user por id
exports.getSingleUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (singleUser) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        }
    } catch (error) {
        res
            .status(200)
            .json({
                "success": false,
                "errors": "error del servidor"
            })
    }
}

//actualizar user

exports.updateUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if (!singleUser) {
            res
                .status(400)
                .json({
                    "success": false,
                    "data": "usuario no existente"
                })
        } else {
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateUser = await User.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateUser
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
    }
}

//Borrar users 
exports.deleteUser = async (req, res) => {
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            });
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": " Error de servidor desconocido"
            })
    }
}

//Crear nuevo user
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200)
            .json({
                "success": true,
                "data": newUser
            })

    } catch (error) {
        if (error instanceof ValidationError) {
            //recorrer el arreglo de errores
            //Foreach
            //map
            const errores = error.errors.map((elemento) => {
                return elemento.message

            });
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": error
                })
        } else {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
}