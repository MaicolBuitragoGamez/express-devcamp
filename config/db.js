const sequelize = require('./seq')
const colors = require('colors')



//Definir la función de conexión a la base de datos

const connectDB = async () => {
    try {
        //Conectarse a la db
        await sequelize.authenticate()
        console.log('Conectado a la MYSQL'.random);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB