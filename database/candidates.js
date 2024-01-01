const mongoose = require('mongoose')


const candidateSchema= new mongoose.Schema({
    Email:'string',
    UserName:'string',
    Password:'string',
    Passport:'string'
})
module.exports = Candidate = mongoose.Model('Candidate',candidateSchema)