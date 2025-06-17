const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        uniqe:true
    },
    fatherName:String,
    email:{
        type:String,
        required:true
    },
    mobile:String,
    className:String,
    year:String,
    password:{
        type:String,
        required:true
    }

},{timestamps:true});

const model=mongoose.model('users',userSchema)

module.exports=model;