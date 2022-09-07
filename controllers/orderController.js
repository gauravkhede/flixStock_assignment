var mongoose=require('mongoose');
const Orders=require('../models/customerOrders');
const Customer=require('../models/customerDetails');
const Product=require('../models/productDetails')
module.exports.createOrders=async function(req,res){
    console.log(typeof mongoose.Types.ObjectId(req.body.customerId));
    let customer= await Customer.find({"id":req.body.customerId});
    console.log(customer);
    if(customer){
        var allProducts=req.body.productList;
        var totalPrice;
        var allProductsInObjectIdForm=[];
        allProducts.map((product)=>{
            myObjectId = mongoose.Types.ObjectId(product)
            // productIdString= myObjectId.toString()
            allProductsInObjectIdForm.push(myObjectId);
            console.log("product id is",myObjectId);
        })
        allProducts.map((product)=>{
             Product.findOne({"id":product},function(err,productFound){
                totalPrice+=productFound.price;
            })
            
        });
        let newOrder=await Orders.create({
            customerId:customer[0]._id,
            productList:allProductsInObjectIdForm,
            totalPrice:totalPrice,
            paymentInfo:req.body.paymentInfo,
            Type:req.body.Type
        });
        customer[0].productId.push(newOrder);
        customer[0].save();
        var productsBought=req.body.productList;
        productsBought.map((product)=>{
            Product.findById(product,function(err,productToBeBought){
                productToBeBought.quantityAvailable-=1;
                productToBeBought.save();
            });
            
        })
        return res.status(200).json({
            orderCreated:newOrder,
            message:"Order created successfully"
        })
    }
    return res.status(404).json({
        message:"Invalid Customer Id"
    })
}
