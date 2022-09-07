const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    productCategory:{
        type:String,
        required:true
    },
    productInfo:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantityAvailable:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});
const Product=mongoose.model('Product',ProductSchema);
module.exports=Product;