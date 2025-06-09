import User from '../model/user.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (req, res, next) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const loginCookie = req.cookies.loginCookie;
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
    req.id = decode.userId;
    next();

  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


export const isAdmin = async (req,res,next)=>{
    try {
        const userId = req.id;
        const user = await User.findById(userId)

        const isAdmin = user.role === 'admin' ? 'admin' || 'superAdmin' : 'user';

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

