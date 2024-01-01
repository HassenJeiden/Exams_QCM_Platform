const mongoose = require('mongoose')

var examSchema = new mongoose.Schema({
    TestRef: "string",
    Candidate:"string",
    Answer: ["A"],
    CorrectAnswer:"string",
    WrongAnswer:"string",
})
module.exports=Exam=mongoose.model('Exam',examSchema)