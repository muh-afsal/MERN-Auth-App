import User from "../model/usesrModel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup=async (req,res,next)=>{
   const {username,email,password} =req.body
   const hashedpassword=bcryptjs.hashSync(password,10)
   const newUser=new User({
       userName:username,
       email:email,
       password:hashedpassword
    })
    
    try {
       await newUser.save()
       res.status(202).json({message:'User saved succesfully'})
    
   } catch (error) {
     next(error)
     }
   
}