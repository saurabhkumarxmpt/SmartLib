const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
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
    },
    role:{
        type:String,
        enum: ['admin', 'staff', 'student'],
        default:'student'
    }

},{timestamps:true});

const model=mongoose.model('users',userSchema)

module.exports=model;