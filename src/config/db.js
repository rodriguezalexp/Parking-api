const mongoose = require('mongoose');
require('dotenv').config();  // Asegúrate de cargar el archivo .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Termina el proceso si no se puede conectar a la base de datos
  }
};

module.exports = connectDB;
