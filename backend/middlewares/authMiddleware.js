import User from '../model/user.js';
import jwt from 'jsonwebtoken';


export const authMiddleware = (req, res, next) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const loginCookie = req.cookies.logincookie;
    if(!loginCookie){
        return res.status(401).json({
            message:'user not Authenticated',
            success:false
        })
    }
    const decode = jwt.verify(loginCookie, JWT_SECRET);
    if(!decode){
       return res.status(401).json({
                message:'Invalid',
                success:false
            })
    }
    req.id = decode.id;
    next();

  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


export const isAdmin = async (req,res,next)=>{
    try {
        const userId = req.id;
        const user = await User.findById(userId)
         
        if(!user) return res.status(400).json({msg:"user doesnot exists",success:false})
        const isAdmin = user.role === 'user' ? false : true;

        if(!isAdmin){
            return res.status(400).json({
                success:false,
            })
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

