const routes =require('express').Router()
const { NewTest, FindTest, InsertQuestion, EditTestHeader,DelTest,DelQuestion,EditQuestion }=require('./controllers/TestsCRUD')



routes.post('/newtest',NewTest);
routes.get('/findtest',FindTest)
routes.post('/addQuestion',InsertQuestion)
routes.post('/editTestHesder',EditTestHeader)
routes.post('/deletetest',DelTest)
routes.post('/removequestion',DelQuestion)
routes.post('/editquestion',EditQuestion)
module.exports = routes