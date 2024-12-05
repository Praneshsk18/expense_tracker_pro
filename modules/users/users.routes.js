const express = require("express");
const userRoute = express.Router();
const register = require("./controllers/register");
const login = require("./controllers/login");
const userdashboard = require("./controllers/userdashboard");
const auth = require("../../middleware/auth");

userRoute.post("/register",register);
userRoute.post("/login",login);


userRoute.use(auth);

userRoute.get("/dashboard",userdashboard);

module.exports=userRoute;