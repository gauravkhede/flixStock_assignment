const mongoose=require('mongoose');
const OrderSchema=new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    productList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }],
    totalPrice:{
        type:Number,
       
    },
    paymentInfo:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Orders=mongoose.model('Orders',OrderSchema);
module.exports=Orders;