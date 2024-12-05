const mongoose = require('mongoose');
const usersModel = require('../../../models/users.models');

const userdashboard = async (req,res) => {
    const usersModel = mongoose.model("users");
    const transactionmodel = mongoose.model("transactions")
    console.log(req.user)

    const getuser = await usersModel.findOne({
        _id:req.user._id,
    }).select("-password -__v")

    const transactions = await transactionmodel.find({
        user_id:req.user._id,
    }).sort("-createdAt").limit(2);
    res.status(200).json({
        status:"Hello from user dashboard",
        data:getuser,transactions
    })
};

module.exports = userdashboard;