const tests = require('../database/tests')


const NewTest = async (req, res) => {
    try {
        var { TestTitle, TestReference, TestDuration, Examiner, Questions, Suggestions, CorrectAnswer } = req.body
        const NewTest = await tests.create({
            "TestTitle": TestTitle,
            "TestReference": TestReference,
            "TestDuration": TestDuration,
            "Examiner": Examiner,
            "Questions": Questions,
            Suggestions: Suggestions,
            "CorrectAnswer": CorrectAnswer
        })
        res.status(201).json({ message: 'new test created successfully', NewTest })
    }
    catch (err) {
        res.status(500).json({ message: "Somthing went wrong" })
        console.error('Error:', err);
    }
}

const FindTest = async (req, res) => {
    try {
        var { Examiner } = req.body
        const findtest = await tests.findOne({ "Examiner": Examiner })
        const reponse = findtest.Suggestions[1][1]
        res.status(201).json({ message: 'are following',reponse })
    } catch (err){
        res.status(500).json({ message: "Somthing went wrong" })
        console.error('Error:', err);
    }
}



module.exports = { NewTest, FindTest }