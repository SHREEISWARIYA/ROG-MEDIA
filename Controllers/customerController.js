const customerModel = require("../model/customerModel")

module.exports = async(req,res) =>{
    const {cusName, cusEmail, cusPhone} = req.body;
    try{
        const customer = await customerModel.create({
            name : cusName,
            email : cusEmail,
            phoneNumber : cusPhone
        })
        res.status(200).json({
            status : "success",
            msg : "Customer data successfully"
        })
    }catch(err){
        res.status(400).json({
            status : "failed",
            errMsg : err.message
        })
    }
}