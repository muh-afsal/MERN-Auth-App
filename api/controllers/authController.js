import User from "../model/usesrModel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup=async (req,res,next)=>{
   console.log("reached the backend of sign up");
   const {Username,email,password} =req.body
   console.log(req.body,'666666666666666666666666body')
   const hashedpassword=bcryptjs.hashSync(password,10)
   const newUser=new User({
       userName:Username,
       email:email,
       password:hashedpassword
    })
    
    try {
       await newUser.save()
       res.status(201).json({message:'User saved succesfully'})
    
   } catch (error) {
     next(error)
     }
   
}