require("express-async-errors");
require("dotenv").config();
require("./models/users.models");
require("./models/transaction.models");
const errorHandlers = require("./handlers/errorHandlers");
const express = require("express");
const mongoose = require("mongoose");
const userRoute  = require("./modules/users/users.routes");
const TransactionRoute = require("./modules/transactions/transactions.routes");
const PORT = process.env.PORT || 8000
const cors = require('cors');

const app =express();
app.use('cors');

mongoose.connect(process.env.DATABASE_CONNECTION).then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log("Database connected failed:",e)
})

app.all("*",(req,res,next) => {
    res.status(404).json({
        status:"Failed",
        message:"Not found",
    })
})
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/transactions",TransactionRoute);
app.use(errorHandlers);

app.listen(9000,() => {
    console.log("Server Started Successfully");
});