const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide Your name!"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required!"]
    },
    balance:{
        type:Number,
        required:[true,"Balance is required"],
        default:0
    }
},{
    timestamps:true
})

const usersModel = mongoose.model("users",userSchema);

module.exports=usersModel;