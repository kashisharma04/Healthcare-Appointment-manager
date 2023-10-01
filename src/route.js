const express = require('express')
const router = express.Router()
const {createDoctor, listDoctors, getByID} = require('../src/doctorController')
const { bookAppointment } = require('../src/appointmentController')

router.get('/', (req, res) => {
    res.send('Router Method !');
});
// Doctor Routes
router.post("/doctor", createDoctor)
router.get("/doctor/get", listDoctors)
router.get('/doctor/getid' , getByID)
// Appointment Routes
router.post('/appointment/book', bookAppointment)

module.exports = router;