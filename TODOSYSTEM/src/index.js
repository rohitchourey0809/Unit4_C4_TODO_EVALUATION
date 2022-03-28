const express = require('express')
const {register,login}  = require('./controllers/auth.controller')
const tododcontroller = require('./controllers/todo.controller')
const usercontroller = require('./controllers/user.controller')


const app = express()
app.use(express.json())
const connect = require('./config/db')


app.use("/user",usercontroller)
app.post("/todos",tododcontroller)
app.post("/register",register)
app.post("/login",login)



app.listen(5000,async function(){
    try{
        console.log("server start 5000")
        await connect()
    }
    catch(err){
        console.log(err)
    }
})