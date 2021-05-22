const express = require("express");
const router = express.Router();
const Student = require("../models/students");

router.get("/th",(req , res)=>{
    res.send("Hellow World")
})

//TODO With Promises

// app.post("/student",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
// })

//todo With async & await

router.post("/student", async (req, res) => {
    try {
      const user = new Student(req.body);
      const userdata = await user.save();
      res.status(201).send(userdata);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.get("/student",async(req ,res) =>{
  try {
      const user = await Student.find();
      res.status(200).send(user);
  } catch (error) {
      res.status(400).send(error);
  }
  })
  
  //todo Get secific data 
  
  router.get("/student/:id",async (req, res) =>{
          try {
              const name = req.params.id;
              const userdata = await Student.find({ name })
              if (!userdata) {
                  return res.status(404).send()
              } else {
                  res.status(200).send(userdata)
              }
          } catch (error) {
              res.status(400).send(error)
          }
  })
  
  
  //todo Update the data 
  
  router.patch("/student/:id", async (req, res)=>{
  try {
      const user = req.params.id;
      const data = await Student.findByIdAndUpdate(user , req.body,{
          new:true,
      })
      if (!data) {
          return res.status(404).send()
      } else {
          res.status(200).send(data)
      }
  
  } catch (e) {
      res.status(404).send(e);
  }
  })
  
  //todo Delete Document
  
  router.delete("/student/:id", async (req, res)=>{
      const user = req.params.id;
  
      const data = await Student.findByIdAndDelete(user,req.body);
      try {
          if (!data) {
              return res.status(404).send()
          } else {
              res.status(200).send(data)
          }
      } catch (error) {
          res.status(500).send(error);
      }
  })

module.exports = router;