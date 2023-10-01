const express = require('express')
const mongoose = require('mongoose')
const doctorModel = require('../src/doctorModel')

//=========================CREATE Doctor/===========================

const createDoctor = async function(req,res){
    try{
    let DoctorData = req.body;
    let {name, specialization, weeklyAvailability, maxPatientsPerDay, appointments:[]} = DoctorData;

    if(!name || !specialization || !weeklyAvailability || !maxPatientsPerDay || !appointments) {res.status(404).send({status : false, message:"Please fill all info!"})}

    let doctor = await doctorModel.create(DoctorData)

    res.status(201).send({ status :true, message: 'Doctor created successfully', doctor });
}
    catch(error){
        console.log(`error`,error.message)
        res.status(500).send({ error: 'Error creating doctor' });
    }
}
module.exports.createDoctor = createDoctor;

//===============GET Doctor/===============================================
// List all doctors


const listDoctors = async function(req,res){
    try {
      const doctors = await doctorModel.find();
      res.status(200).send({status : true, doctors});
    }
    catch(error){
        console.log(`error`,error.message)
        res.status(500).send({ error: 'Error getting doctor' });
    }
}
module.exports.listDoctors = listDoctors;

//=============GET Doctor===============================================
// Get doctor details by ID


const getByID = async function(req,res){

    try {
      const doctor = await doctorModel.findById(req.params.doctorId);
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
      res.status(200).send({status : true, doctor});
    } catch(error){
        console.log(`error`,error.message)
        res.status(500).send({ error: 'Error getting doctor' });
    }
};
module.exports.getByID = getByID;
  
  // Book an appointment with a doctor
//   app.post('/api/doctors/:doctorId/book-appointment', async (req, res) => {
//     try {
//       const doctor = await Doctor.findById(req.params.doctorId);
//       if (!doctor) {
//         return res.status(404).json({ error: 'Doctor not found' });
//       }
  
//       // Check if the doctor is available (e.g., evenings only)
//       if (doctor.availability !== 'evenings') {
//         return res.status(400).json({ error: 'Doctor is not available at this time' });
//       }
  
//       // Check if the doctor has reached the maximum patients limit for the day
//       if (doctor.appointments.length >= doctor.maxPatientsPerDay) {
//         return res.status(400).json({ error: 'Doctor is fully booked for the day' });
//       }
  
//       // Create a new appointment
//       const appointment = {
//         date: new Date(),
//         patientName: req.body.patientName,
//       };
  
//       // Add the appointment to the doctor's appointments
//       doctor.appointments.push(appointment);
  
//       // Save the doctor's updated data
//       await doctor.save();
  
//       res.json({ message: 'Appointment booked successfully', appointment });
//     } catch (error) {
//       res.status(500).json({ error: 'Error booking appointment' });
//     }
//   });
  
