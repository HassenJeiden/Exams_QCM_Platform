const routes =require('express').Router()
const {NewTest,FindTest}=require('./controllers/TestsCRUD')



routes.post('/newtest',NewTest);
routes.get('/findtest',FindTest)



module.exports = routes