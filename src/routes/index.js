const express = require('express');
const vehicleRoutes = require('./vehicleRoutes');

const router = express.Router();

// Rutas de vehículos
router.use('/vehicles', vehicleRoutes);

module.exports = router;
