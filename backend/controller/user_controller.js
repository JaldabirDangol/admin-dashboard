import User from "../model/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async(req,res)=>{
    try{
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                msg:'User already exists',
                success:false
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            username,
            password:hashedPassword,
            email,
        }) 
        console.log(newUser)
     
        return res.status(201).json({
            success:true,
            msg:"user Created",
            user:newUser
        })
    }catch(e){
        console.log(e)
    }
}

export const loginUser = async(req,res)=>{
    try {
        
        const { email ,password , role } = req.body;
        const user = await User.findOne({email});
        const JWT_SECRET = process.env.JWT_SECRET;

        if(!user) return res.status(400).json({msg:"user doesnot exists"});
         
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"});

        const token = jwt.sign({
            id:user._id,
            role:user.role
        },JWT_SECRET)
        
        res.status(200).json({
      success:true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        msg:"login successfully"
      }
    }); 

    } catch (error) {
        console.log(error)
    }
}

export const allUser = async(req,res)=>{
    try {
        const users = await User.find().select('-password');
        return res.status(200).json(users);
    } catch (error) {
       console.log(error)        
    }
}