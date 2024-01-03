const mongoose=require('mongoose')

var examinerSchema= new mongoose.Schema({
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

module.exports = Examiner = mongoose.Model('Examiner',examinerSchema)