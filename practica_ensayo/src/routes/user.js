const express =require("express")
const router = express.Router()
const userUseCase = require("../utils/userUseCase")
router.post("/",async(req,res)=>{
 try {
     const user =req.body
     res.status(201).send({message: "user created",data:user})
 } catch (error) {
    res.status(400).send({message: error})
 }
})

router.get("/",async(req,res)=>{
    try {
        const users = await userUseCase.getUsers()
        res.send({message:"All users",data:users})
    } catch (error) {
       res.status(400).send({message: error})
    }
   })

   router.put("/:id",async(req,res)=>{
    try {
       const user = req.body
       const {id}=req.params.id
       res.send({message:"user updated",data:user})
    } catch (error) {
       res.status(400).send({message: error})
    }
   })

   router.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params
        res.send({message:"user deleted"})
    } catch (error) {
       res.status(400).send({message: error})
    }
   })

   module.exports= router