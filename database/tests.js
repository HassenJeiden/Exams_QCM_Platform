var mongoose = require('mongoose')
const testsSchema = new mongoose.Schema(
    {
        TestTitle: String,
        TestReference: String,
        TestDuration: String,
        Examiner: String,
        Questions: [String],
        Suggestions: [{type:Array}],
        correctAnswer: String

    }
)

module.exports = Tests = mongoose.model('Tests', testsSchema)