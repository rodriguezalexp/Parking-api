// src/routes/vehicleRoutes.js
const express = require('express');
const {
  getVehicles,
  createVehicle,
  updateExitTime,
  deleteVehicle,
} = require('../controllers/vehicleController');

const router = express.Router();

router.get('/', getVehicles); // Obtener todos los vehículos
router.post('/', createVehicle); // Crear un registro de entrada
router.put('/:licensePlate/exit', updateExitTime); // Registrar salida
router.delete('/:licensePlate', deleteVehicle); // Eliminar registro

module.exports = router;
