const mongoose = require('mongoose');
const usersModel = require('../../../models/users.models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const jwtmanager = require('../../../managers/jwtmanager');

const login = async (req,res) => {

    const usersModel=mongoose.model('users');

    const {email,password}=req.body;

    const getuser = await usersModel.findOne({
        email:email
    });

    if(!getuser){
        throw "This email does not exist in the system";
    }

    const comparePassword = await bcrypt.compare(password,getuser.password);

    if(!comparePassword) throw "Email and password do not match!";

    const accesstoken = jwtmanager(getuser);


    res.status(200).json({
        status:"sucsess",
        message:"User Logged in successfully!",
        accesstoken:accesstoken
    });
};

module.exports = login;