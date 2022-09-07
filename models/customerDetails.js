const mongoose=require('mongoose');
const CustomerSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Customer=mongoose.model('CustomerDetails',CustomerSchema)
module.exports=Customer;