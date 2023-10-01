const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
    required: true,
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Canceled', 'Completed'], // Appointment status options
    default: 'Pending', // Default status is Pending
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
