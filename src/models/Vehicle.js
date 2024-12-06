const mongoose = require("mongoose");


const vehicleSchema = mongoose.Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        enum: ["car", "motorcycle"],
        required: true,
    },
    entryTime: {
        type: Date,
        default: Date.now(),
    },
    exitTime: {
        type: Date
    },
},
{ timestamps: true }
)

module.exports = mongoose.model('Vehicle', vehicleSchema);