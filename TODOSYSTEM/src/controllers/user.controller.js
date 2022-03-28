const User = require('../models/user.model')
const express = require('express')

const router = express.Router()

router.get("/",async function (req, res) {
      try{
          let user = await User.find().lean().exec()
          return res.send(user)
      }
      catch(err){
          return res.send(err)
      }
})

router.post("/",async function (req, res) {
      try{
          let user = await User.create(req.body)
          return res.send(user)
      }
      catch(err){
          return res.send(err)
      }
})

module.exports = router