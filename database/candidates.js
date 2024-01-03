const mongoose = require('mongoose')


const candidateSchema= new mongoose.Schema({
    Email:{
        type:String,
        unique:true
    },
    UserName:{
        type:String,
        unique:true
    },
    Password:'string',
    CloseAt:'string'
})
module.exports = Candidate = mongoose.Model('Candidate',candidateSchema)