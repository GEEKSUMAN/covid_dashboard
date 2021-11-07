const express = require("express")
const mongoos = require("mongoose")
const url = 'mongodb://localhost/CovidDB'
const app = express()
mongoos.connect(url,{useNewUrlParser:true})
const con = mongoos.connection
con.on('open',() => {
    console.log('Db connected')
})
app.use(express.json())
const myRouter = require('./routes/my_routes')
app.use('/dashboard',myRouter)
app.listen(9000,()=>{
console.log('Server running')
})