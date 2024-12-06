const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Archivo index.js en la carpeta routes
const errorHandler = require('./middleWare/errorMiddleware'); // Middleware de manejo de errores

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes); // Prefijo para las rutas

// Manejo de errores
app.use(errorHandler);

module.exports = app;
