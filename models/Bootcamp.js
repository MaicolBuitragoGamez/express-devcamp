const mongoose = require('mongoose');

//Model de bootcamps
const BootcamsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Por favor, ingrese el nombre"
        ],
        unique: true,
        maxlength: [
            0,
            "No se admiten bootcamps > 30"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "por favor, ingrese la descripción"
        ],
        maxlength: [
            500,
            "No se admiten descripciones > 500"
        ]
    },
        phone:{
            type:String,
            maxlength:[
                20,
                "Teléfono no mayores a 20"
            ]
        },
        email:{
            type:String,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'por favor ingrese e-mail'
            ]
        },
    averageCost: Number,
    averageRating:{
        type:Number,
        min: [1, 'Calificación  minima: 1'],
        max: [10, 'Calificación máxima: 10']
    }
});

module.exports = mongoose.model('bootcamp', BootcamsSchema);