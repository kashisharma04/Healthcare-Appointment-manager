const express = require('express')
const appointmentModel = require('../src/appointmentModel')
const doctorModel = require('../src/doctorModel')

//=======================/Book Appointment/======================

const bookAppointment = async function(req,res){
    try{
      const data = req.body
      const { patientName, doctorId, mobile } = data;
  
      // Check if patientName and doctorId are provided
      if (!patientName || !doctorId || !mobile) {
        // console.log(`${patientName} and ${doctorId}`)
        return res.status(400).send('Please provide missing details');
      }
      // Check if the specified doctor exists
      const doctor = await doctorModel.findById({_id : doctorId});
  
      if (!doctor) {
        return res.status(404).send('Doctor not found');
      }
      // Create a new appointment
      const appointment = await appointmentModel.create(data);

      return res.status(201).send({status:true, message: 'Appointment Booked!', appointment });
    } 
    catch (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send({ status : false, error: 'Error booking appointment' });
    }
};
module.exports.bookAppointment = bookAppointment;

