const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

require("dotenv").config()

const generatetoken = (user) =>{
    // console.log.process.env
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const register = async(req,res) =>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(user)
        {
            return res.status(400).send({message : "Email already Exists"})
        }

        user = await User.create(req.body)
          const token  =generatetoken(user)
         return res.status(200).send({user,token})

    }
    catch(err)
    { 
          return res.status(400).send({message :err.message})
    }
}



const login = async(req, res) => {
    try{
         let user = await User.findOne({email:req.body.email})

        if(!user)
        {
            return res.status(400).send({message : "Wrong Email"})
        }

        const match = user.checkPassword(req.body.password)

         if(!match)
        {
            return res.status(400).send({message : "Wrong Password"})
        }

         const token  =generatetoken(user)
         return res.status(200).send({user,token})

    }
    catch(err)
    { 
         return res.status(400).send({message :err.message})
    }
}



module.exports = {register,login}