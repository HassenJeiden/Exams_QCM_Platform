const mongoose = require('mongoose')



const connect_DB = () => {
    try {
        mongoose.connect(process.env.DB_LINK)
        console.log('database connected successfully')
    }
    catch {
        err => { if (err) throw err }
    }
}
module.exports=connect_DB