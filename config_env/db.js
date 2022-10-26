const mongoose = require('mongoose');

//const uri = 'mongodb+srv://Maicol2345:maicol2354678@cluster0.65szitb.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'


//Componente de conexión a BD

const connectDB = async() => {
    const conn = await mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
}

connectDB();