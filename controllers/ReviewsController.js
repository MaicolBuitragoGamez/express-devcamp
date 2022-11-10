//Dependencias:
//El objeto conexxión:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//El modelo
const ReviewsModel = require('../models/reviews')

//Crear la entidad:
const Reviews = ReviewsModel(sequelize, DataTypes)



//listar todos los bootcamps
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Reviews.findAll();
        res.status(200)
            .json({
                "success": true,
                "data": reviews
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
exports.getSingleReview = async (req, res) => {
    try {
        const singleReview = await Reviews.findByPk(req.params.id);
        if (singleReview) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
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

exports.updateReview = async (req , res) =>{
     
    try {
    const singleReview = await Reviews.findByPk(req.params.id);
     if(!singleReview){
        res
        .status(400)
        .json({
            "success": false,
            "errors":"usuario no existente"
        })
     }else{
        // en caso que actualizo el usuario
        //console.log(req.params.id)
        await Reviews.update (req.body,{
        where:{
            id: req.params.id
        }});
        //selecciono user actualizado
        const updateReview = await Reviews.findByPk(req.params.id);
    res
    .status(200)
    .json({
        "success": true,
        "data" : updateReview 
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

exports.deleteReview = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleReview = await Reviews.findByPk(req.params.id);
        if (!SingleReview) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Reviews.destroy({
                where:{
                    id:req.params.id
                }
            }
            );
        console.log(req.params.id)
        res.status(200)
        .json({
            "success": true,
            "data":SingleReview,
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
exports.createReview = async (req, res) => {
    try {
        const newReview = await Reviews.create(req.body);
        res.status(200)
            .json({
                "success": true,
                "data": newReview
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