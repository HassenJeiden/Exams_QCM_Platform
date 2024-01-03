const { errorMonitor } = require('nodemailer/lib/xoauth2')
const tests = require('../database/tests')


const NewTest = async (req, res) => {
    try {
        var { TestTitle, TestReference, TestDuration, Examiner, Questions } = req.body
        const NewTest = await tests.create({
            "TestTitle": TestTitle,
            "TestReference": TestReference,
            "TestDuration": TestDuration,
            "Examiner": Examiner,
            "Questions": Questions
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
        var { TestReference } = req.body
        var param1 = new RegExp(TestReference)
        console.log(param1)
        const findtest = await tests.find({ TestReference: { $regex: param1, $options: 'i' } })
        res.status(201).json({ message: `${findtest.length} record(s) was/were found`, findtest })
    } catch (err) {
        res.json({ message: err.message })
        console.error('Error:', err);
    }
}
const InsertQuestion = async (req, res) => {
    try {
        const { id, Questions } = req.body
        const newquestion= await tests.findOneAndUpdate({_id:id},{'$push':{Questions:Questions}},{ new: true })
        res.json({message:'ok',newquestion})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}
const EditTest = async (req, res) => {
    try {

    } catch {
        res.status(500).json({ message: err.message })
    }
}



module.exports = { NewTest, FindTest, InsertQuestion, EditTest }