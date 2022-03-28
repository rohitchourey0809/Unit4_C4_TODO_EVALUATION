const Todo = require('../models/Todo.model')
const express = require('express')
const authenticate = require('../middleware/authenticate')
const router = express.Router()

router.get("/",authenticate,async function (req, res) {
      try{
          let todo = await Todo.find()
          return res.send(todo)
      }
      catch(err){
          return res.send(err)
      }
})

router.post("/",authenticate,async function (req, res) {
      try{
          let todo = await Todo.create(req.body)
          return res.send(todo)
      }
      catch(err){
          return res.send(err)
      }
})

router.patch("/:id",authenticate,async function (req, res) {
      try{
          let todo = await Todo.findById()
          return res.send(todo)
      }
      catch(err){
          return res.status(401).send({err : "401"})
      }
})


router.delete("/:id",authenticate,async function (req, res) {
      try{
          let todo = await Todo.findByIdAndDelete().lean().exec()
          return res.send(todo)
      }
      catch(err){
          return res.status(401).send({err : "401"})
      }
})


module.exports = router ;