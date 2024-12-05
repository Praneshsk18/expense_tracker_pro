const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtmanager = require("../../../managers/jwtmanager");


const register = async (req, res) => {
    try {
        const userModel = mongoose.model("users");
        const { name, email, password, confirm_password, balance } = req.body;

        if (!email) throw "Provide Email";
        if (!password) throw "Provide Password";
        if (password.length < 5) throw "Password must be at least 5 characters long!";
        if (!name) throw "Name is required!";
        if (password !== confirm_password) throw "Password and confirmation do not match!" ;

        const getDuplicateEmail = await userModel.findOne({ email: email });
        if (getDuplicateEmail) {
            throw "This email already exists!";
        }

        const hashedPassword = await bcrypt.hash(password, 3);

        const createduser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
            balance: balance || 0 ,
        });

        const accesstoken = jwtmanager(createduser);

        res.status(200).json({
            status: "User registered successfully!",
            access:accesstoken
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = register;
