//Dependencias:
//El objeto conexxión:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes } = require('sequelize')

//El modelo
const UserModel = require('../models/user')

//Crear la entidad:
const User = UserModel(sequelize,DataTypes)



//listar todos los bootcamps
exports.getAllUsers  = async (req, res)=>{
    const users= await User.findAll();
    res.status(200)
    .json({
        "success": true,
        "data":users
    })
}

//listar user por id
exports.getSingleUser = async (req, res)=>{
    const usersid = await User.findAll({
        where:{
            id:req.params.id
        }
    })
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid
    })
}

//Actualizar user
exports.updateUser =  async(req, res)=>{
    const useridUpdate = await User.update( req.body,
        {
        where:{
            id:req.params.id
        }
    });
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":useridUpdate
    })
}

//Eliminar user
exports.deleteUser = async(req, res)=>{
    const useridDelete = await User.destroy({
        where:{
            id:req.params.id
        }
    })
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":useridDelete
    })
}

//Crear nuevo user
exports.createUser = async (req, res)=>{
    const newUser = await User.create(req.body);
    res.status(200)
    .json({
        "success": true,
        "data":newUser
    })
}