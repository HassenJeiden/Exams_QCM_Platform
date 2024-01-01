const express= require('express')
const dotenv= require('dotenv').config()
const app=express()
const port=process.env.PORT
const mongoose = require('mongoose')
const connect_DB =require('./databaseLink')


app.listen(port,()=>console.log("listening on port:",port))
app.use(express.json(),express.text())
app.use('/api',require('./routes'))
connect_DB()