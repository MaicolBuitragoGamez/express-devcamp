const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes } = require('sequelize')

//Crear instancia de el model User
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)

//Definir la función de conexión a la base de datos

const connectDB = async () => {
    try {
        //Conectarse a la db
        await sequelize.authenticate()
        console.log('Conectado a la MYSQL'.random)
        // Create a new user
        const jane = await User.create({ username: "Maicol", email: "mscorrea18@misena.edu.co", password: "123" });
        console.log("Jane's auto-generated ID:", jane.username);
    } catch (error) {
        console.log(error)
    }
}

connectDB();