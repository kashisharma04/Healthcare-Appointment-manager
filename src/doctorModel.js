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
  experience : {
    type : String
  },
  weeklyAvailability: {
    type: [String], // Array of weekdays (e.g., ['Monday', 'Tuesday'])
    required: true,
  },
  maxPatientsPerDay: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
