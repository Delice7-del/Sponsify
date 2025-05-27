const json= require(jsonwebtoken);
const User= require('../models/UserSchema');

const protect= async (req,res,next) =>{

      let token;
if(req.headers.authentication && req.headers.authentication.startsWith('Bearer')){
  
    try{
        const token= req.headers.authentication.split(' ')[1];

        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        req.user= await User.findById(decoded.id).select('-password');

        next();


    } catch(err){
        console.error(err);
        res.status(401).json({message: 'Not authorized, token failed'});
    }
    
}
if(!token){
    res.status(401).json({message: 'Not authorized, no token'});
}
};

const admin= (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        next();
    } else{
        res.status(403).json({message: 'Not authorized as admin'});
    }

};

module.exports= {protect,email};

