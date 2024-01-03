const routes =require('express').Router()
const {NewTest,FindTest,InsertQuestion}=require('./controllers/TestsCRUD')



routes.post('/newtest',NewTest);
routes.get('/findtest',FindTest)
routes.post('/addQuestion',InsertQuestion)


module.exports = routes