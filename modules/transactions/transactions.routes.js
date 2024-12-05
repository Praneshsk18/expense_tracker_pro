const express = require("express");
const TransactionRoute = express.Router();
const auth = require("../../middleware/auth");
const addincome = require("./controllers/addincome");
const addexpense = require("./controllers/addexpense");
const gettransaction = require("./controllers/gettransaction");




TransactionRoute.use(auth);

TransactionRoute.post("/addincome",addincome);
TransactionRoute.post("/addexpense",addexpense);
TransactionRoute.get("/",gettransaction)


module.exports=TransactionRoute;