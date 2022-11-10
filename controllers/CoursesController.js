//Dependencias:
//El objeto conexxión:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//El modelo
const CoursesModel = require('../models/courses')

//Crear la entidad:
const Courses = CoursesModel(sequelize, DataTypes)



//listar todos los bootcamps
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.findAll();
        res.status(200)
            .json({
                "success": true,
                "data": courses
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
exports.getSingleCourse = async (req, res) => {
    try {
        const singleCourse = await Courses.findByPk(req.params.id);
        if (singleCourse) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourse
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

exports.updateCourse = async (req , res) =>{
     
    try {
    const singleCourse = await Courses.findByPk(req.params.id);
     if(!singleCourse){
        res
        .status(400)
        .json({
            "success": false,
            "errors":"usuario no existente"
        })
     }else{
        // en caso que actualizo el usuario
        //console.log(req.params.id)
        await Courses.update (req.body,{
        where:{
            id: req.params.id
        }});
        //selecciono user actualizado
        const updateCourse = await Courses.findByPk(req.params.id);
    res
    .status(200)
    .json({
        "success": true,
        "data" : updateCourse
    })
}
 } catch (error) {
        res
        .status(400)
        .json({
            "sucess":false,
            "errors":"error de servidor desconocido"

        }) 
    }
    
}

exports.deleteCourse = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleCourse = await Courses.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Courses.destroy({
                where:{
                    id:req.params.id
                }
            }
            );
        console.log(req.params.id)
        res.status(200)
        .json({
            "success": true,
            "data":SingleCourse,
            "mensaje":"Se elimino el usuario correctamente"
        });
    }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": "Error de servidor desconocido"
        })
    }
}

//Crear nuevo user
exports.createCourse = async (req, res) => {
    try {
        const newCourse = await Courses.create(req.body);
        res.status(200)
            .json({
                "success": true,
                "data": newCourse
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