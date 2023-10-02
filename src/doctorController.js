const express = require('express')
const mongoose = require('mongoose')
const doctorModel = require('../src/doctorModel')

//=========================CREATE Doctor/===========================

const createDoctor = async function(req,res){
    try{
    let DoctorData = req.body;
    let {name, specialization, weeklyAvailability, maxPatientsPerDay} = DoctorData;

    if(!name || !specialization || !weeklyAvailability || !maxPatientsPerDay) {res.status(404).send({status : false, message:"Please fill all info!"})}

    let doctor = await doctorModel.create(DoctorData)

    let checkData = await doctorModel.find({ name, specialization })
    if(checkData.length > 0) {return res.status(200).send(`The Doctor is already registered.`)}
    //console.log(checkData.name)
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
      const doctors = await doctorModel.find().select({name:1 , specialization:1, experience:1});
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
      let name = req.query.name
      const doctor = await doctorModel.find({name : name});
      if (!doctor) {
        return res.status(404).send({ error: 'Doctor not found' });
      }
      res.status(200).send({status : true, doctor});
    } catch(error){
        console.log(`error`,error.message)
        res.status(500).send({ error: 'Error getting doctor' });
    }
};
module.exports.getByID = getByID;

