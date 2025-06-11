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
            role:user.role,
            name:user.name,
            email:user.email
        },JWT_SECRET)
        
       return res.cookie('logincookie',token,{
            httpOnly:true, sameSite:'strict',maxAge:1*24*60*60*1000
        }).status(200).json({
      success:true,
      msg:"login successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      }
    }); 

    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, res) => {
  try {
    return res.cookie("logincookie","", { maxAge: 0 })
    .json({
      msg: "Logged out successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error", success: false });
  }
};

export const allUser = async(req,res)=>{
    try {
        const users = await User.find().select('-password');
        return res.status(200).json({users:users,success:true});
    } catch (error) {
       console.log(error)        
    }
}

export const changeRole = async(req,res)=>{
    try{
        const userId = req.id;
        const user = User.findById(userId);
        const targetUserId = req.params.id;
        const targetUser = User.findById(targetUserId);
        const { newRole} = req.body;

       const roles = {
       user: 1,
       admin: 2,
       superadmin: 3
      };

        if(!user){
            return res.status(400).json({
                msg:"user doesnot exist",
                success:false
            })
        }

        if(!user.role === "admin " || "superAdmin"){
            return res.status(400).json({
                msg:"you are not authorized for this activity",
                success:false
            })
        }
       
     if(!roles[user.role]>roles[targetUser.role]){
          return res.status(400).json({
                msg:"you are not authorized for this activity",
                success:false
          })
     }
        
     targetUser.role = newRole;

    return res.status(200).json({
        msg:"role changed succesfully ",
        success:false
    })

    }catch(error){
        console.log(error)
    }
}