const mongoose = require('mongoose');

const gettransaction = async (req,res) => {
const transactionmodel = mongoose.model("transactions");
console.log(req.query);

    const transactions=await transactionmodel.find({
        user_id:req.user._id,
        ...req.query,
    })

    res.status(200).json({
        status:"Success",
        data:transactions
    })
}

module.exports = gettransaction;