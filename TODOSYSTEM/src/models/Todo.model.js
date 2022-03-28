const mongoose = require('mongoose')

const todoschema = new mongoose.Schema(
    { 
        title : {type:String , required: true },
        user_id : {type:mongoose.Schema.Types.ObjectId , ref:"user",required: true}
       
    }, 
    {
        versionKey : false,
        timestamps : true
    }
)

const Todo = mongoose.model("todo",todoschema)
module.exports = Todo