const Customer= require('../models/customerDetails');

module.exports.createCustomer=async function(req,res){
    try{
        console.log(req.body,' is the requested body');
        var customer=await Customer.find({email:req.body.email});
        if(customer.length==0){
            var newCustomer=await Customer.create({
                email:req.body.email,
                name:req.body.name,
                phone:req.body.phone

            });
           return res.status(200).json({
                customer:newCustomer,
                message:"Customer created a successfully"
                
            })
        }
        return res.status(409).json({
            message:'Customer already Exist! Try different Email Id'
        })}catch(error){
            console.log(error);
            return;
        }
}