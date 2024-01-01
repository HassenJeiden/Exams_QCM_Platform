const mongoose=require('mongoose')

var examinerSchema= new mongoose.Schema({
    Email:'string',
    UserName:'string',
    Password:'string',
    Passport:'string'
})

module.exports = Examiner = mongoose.Model('Examiner',examinerSchema)