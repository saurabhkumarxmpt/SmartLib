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