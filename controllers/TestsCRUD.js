const { errorMonitor } = require('nodemailer/lib/xoauth2')
const tests = require('../database/tests')
const question = require('../database/questions')


const NewTest = async (req, res) => {
    try {
        var { TestTitle, TestReference, TestDuration, Examiner, Questions } = req.body
        //add a new quetion to the test
        const NewTest = await tests.create({
            "TestTitle": TestTitle,
            "TestReference": TestReference,
            "TestDuration": TestDuration,
            "Examiner": Examiner,
            "Questions": Questions
        })
        ////Add a new question to the question database for future use
        const NewQuestion = await question.create({
            Question: Questions.question,
            Suggestions: Questions.suggestion,
            Answer: Questions.answer,
            Examiner: Examiner
        })
        res.status(201).json({ message: 'new test created successfully', NewTest, NewQuestion })
    }
    catch (err) {
        //if error send the error message
        res.status(500).json({ message: err.message })

    }
}

const FindTest = async (req, res) => {
    try {
        var { TestReference, TestTitle, Examiner } = req.body
        var reference = new RegExp(TestReference)
        var title = new RegExp(TestTitle)
        const findtest = await tests.find({
            TestReference: { $regex: reference, $options: 'i' },
            TestTitle: { $regex: title, $options: 'i' },
            Examiner: Examiner,
        })
        res.status(201).json({ message: `${findtest.length} record(s) was/were found`, findtest })
    } catch (err) {
        //if error send the error message
        res.status(500).json({ message: err.message })
    }
}

const EditTestHeader = async (req, res) => {
    try {
        const { id, TestTitle, TestDuration } = req.body
        const EditQuestion = await tests.findOneAndUpdate({ _id: id }, {
            "TestTitle": TestTitle,
            "TestDuration": TestDuration,
        })
        res.status(201).json({ message: "Test header edited successfully", EditQuestion })
    } catch (err) {
        //if error send the error message
        res.status(500).json({ message: err.message })
    }
}

const DelTest = async (req, res) => {
    try {
        const { id } = req.body
        const deletetest = await tests.findOneAndDelete({ _id: id })
        res.status(201).json({ message: "Test deleted successfully", deletetest })
    } catch (err) {
        //if error send the error message
        res.status(500).json({ message: err.message })
    }
}
const InsertQuestion = async (req, res) => {
    try {
        const { id, Questions } = req.body//get data from the body
        const insertQuestion = await tests.findOne({ _id: id })//find the test
        insertQuestion.Questions.push(Questions)//push new question into the array
        insertQuestion.save()//save modification
        /*we can use this instruction too to do sam goal
const newquestion= await tests.findOneAndUpdate({_id:id},{'$push':{Questions:Questions}},{ new: true })*/
        insertQuestion.Questions.sort()//sort the array of question
        res.status(201).json({ message: 'The question has been successfully added to your test' })//send the response to the body
    } catch (err) {
        //i error send the error message
        res.status(500).json({ message: err.message })
    }
}
const DelQuestion = async (req, res) => {
    try {
        const { id, ind } = req.body//get data from the body
        const delQuestion = await tests.findOne({ _id: id })//find the test
        delQuestion.Questions[ind].deleteOne()//delete selected question from the array
        delQuestion.save()//save modification
        delQuestion.Questions.sort()//sort the array of question
        res.status(201).json({ message: 'The question has been successfully removed' })//send the response to the body
    } catch (err) {
        //i error send the error message
        res.status(500).json({ message: err.message })
    }
}
const EditQuestion = async (req, res) => {
    try {
        const { id, ind,Question,Examiner } = req.body//get data from the body
        const editedQuestion = await tests.findOne({ _id: id })//find the test
        editedQuestion.Questions[ind]=Question//replace the selected question from the array by the new one
        editedQuestion.save()//save modification
        editedQuestion.Questions.sort()//sort the array of question
        ////Add a new question to the question database for future use
        const NewQuestion = await question.create({
            Question: Question.question,
            Suggestions: Question.suggestion,
            Answer: Question.answer,
            Examiner: Examiner
        })
        res.status(201).json({ message: 'The question has been successfully edited',NewQuestion })//send the response to the body
    } catch (err) {
        //i error send the error message
        res.status(500).json({ message: err.message })
        console.error("Error:",err)
    }
}


module.exports = { NewTest, FindTest, InsertQuestion, EditTestHeader, DelTest, DelQuestion, EditQuestion }