const mongoose = require('mongoose')

const questionsSchema= mongoose.Schema({
    Question:String,
    Suggestions:Array,
    Answer:String,
    Examner:String
})

module.exports = Questions = mongoose.model('Question',questionsSchema)