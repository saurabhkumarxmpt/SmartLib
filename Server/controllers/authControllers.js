const User=require('../models/users');
const bcrypt=require('bcrypt');

exports.register=async(req,res)=>{
    try{
        const{
            name,
            userName,
            fatherName,
            email,
            mobile,
            className,
            year,
            password
        }=req.body;

        const hasedPassword=await bcrypt.hash(password, 10);
        
        const user=new User({
            name,
            userName,
            fatherName,
            email,
            mobile,
            className,
            year,
            password:hasedPassword
        });

        await user.save();
        res.json({message:"user information saved"});
        
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


exports.login=async(req,res)=>{

    const{userName,password}=req.body;
    try{
        const user= await User.findOne({userName});
        if(!user) return res.status(404).json({message:'user not found'});

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'password not matched'});
        res.json(user);
    }catch(err){
       res.status(500).json({message:err.message}); 
    }
}