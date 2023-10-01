const express = require('express')
const route = require('../Healthcare-Appointment-manager/src/route');
const mongoose= require('mongoose')

require('dotenv').config()
const {PORT, MONGODB_CONNECT} = process.env;

const app = express();
app.use(express.json());

mongoose.set('strictQuery' , true);

mongoose.connect(MONGODB_CONNECT, {useNewURLParser : true})
.then(()=>{
    console.log(`Database Connected with MongoDB`)
})
.catch((error)=>{
    console.log("Error in MongoDB connection", error.message)
})

app.use('/', route);
app.listen(PORT ,()=>{
    console.log(`Server running at ${PORT}`)
})