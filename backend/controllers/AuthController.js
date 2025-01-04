const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/users");

const signup = async (req,res)=>{
try{
const {name,email,password} = req.body;
const user = await UserModel.findOne({email});
if(user){
    return res.status(409).json({message:"User Already Exists ,You can login ",success:false});
}
const userModel = new UserModel({name,email,password});
userModel.password = await bcrypt.hash(password,10);
await userModel.save();
res.status(201).json({message:"SignUp Successfully",success:true});
}catch(err){
res.status(500).json({message:"Internal Server Error",success:false});
console.log(err);
}
}





const login = async (req,res)=>{
    try{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    const errorMsg="Auth Failed Email or Password is wrong!";
    if(!user){
        return res.status(403).json({message:errorMsg,success:false});
    }
  const isPassEqual = await bcrypt.compare(password,user.password);
  if(!isPassEqual){
   
        return res.status(403).json({message:errorMsg,success:false});
    
  }

  const jwtToken=jwt.sign({email:user.email,_id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:'24h'}

  );
    res.status(201).json({message:"Login Success",success:true,jwtToken,
        email,
        name:user.name
    });
    }catch(err){
    res.status(500).json({message:"Internal Server Error",success:false});
    console.log(err);
    }
    }

module.exports={
    signup,
    login
}