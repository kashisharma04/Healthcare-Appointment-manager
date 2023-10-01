const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  weeklyAvailability: {
    type: [String], // Array of weekdays (e.g., ['Monday', 'Tuesday'])
    required: true,
  },
  maxPatientsPerDay: {
    type: Number,
    required: true,
  },
  appointments: [
    {
      date: Date,
      patientName: String,
    },
  ],
});

module.exports = mongoose.model('Doctor', doctorSchema);
