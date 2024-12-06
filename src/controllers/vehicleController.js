// src/controllers/vehicleController.js
const asyncHandler = require('express-async-handler');
const Vehicle = require('../models/Vehicle');

// Constantes de capacidad
const CAR_CAPACITY = 5;
const MOTORCYCLE_CAPACITY = 10;

// Obtener todos los vehículos registrados
const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
});

// Crear un nuevo registro de entrada
const createVehicle = asyncHandler(async (req, res) => {
  const { licensePlate, type } = req.body;

  if (!['car', 'motorcycle'].includes(type)) {
    res.status(400);
    throw new Error('Invalid vehicle type.');
  }

  // Validar disponibilidad
  const count = await Vehicle.countDocuments({ type, exitTime: null });
  if ((type === 'car' && count >= CAR_CAPACITY) || (type === 'motorcycle' && count >= MOTORCYCLE_CAPACITY)) {
    res.status(400);
    throw new Error(`No available slots for ${type}s.`);
  }

  // Crear y guardar el vehículo
  const newVehicle = new Vehicle({ licensePlate, type });
  await newVehicle.save();
  
    // Verificar si el vehículo está en el parqueadero
    const message = newVehicle.exitTime === null
    ? `Vehicle registered at ${newVehicle.entryTime.toLocaleString()}`
    : 'Vehicle has already exited the parking lot.';

  // Devolver la respuesta con el mensaje
  res.status(201).json({
    message: message,
    vehicle: newVehicle
  });
});

// Registrar salida (actualizar tiempo de salida)
const updateExitTime = asyncHandler(async (req, res) => {
  const { licensePlate } = req.params;

  const vehicle = await Vehicle.findOne({ licensePlate, exitTime: null });
  if (!vehicle) {
    res.status(404);
    throw new Error('Vehicle not found or already exited.');
  }

  vehicle.exitTime = new Date();
  await vehicle.save();
  res.json(vehicle);
});

// Eliminar registro de vehículo (solo con fines administrativos)
const deleteVehicle = asyncHandler(async (req, res) => {
  const { licensePlate } = req.params;

  const vehicle = await Vehicle.findOneAndDelete({ licensePlate });
  if (!vehicle) {
    res.status(404);
    throw new Error('Vehicle not found.');
  }
  
  res.json({ message: 'Vehicle deleted successfully.' });
});

// Exportar funciones como constantes
module.exports = {
  getVehicles,
  createVehicle,
  updateExitTime,
  deleteVehicle,
};
