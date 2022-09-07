const Product=require('../models/productDetails');

module.exports.createProduct=async function(req,res){
    let product=await Product.findOne({productName:req.body.productName});
    if(product){
        product.quantityAvailable+=req.body.quantityAvailable;
        product.save();
        return res.status(200).json({
            message:` Product already available So, we increased the quantity of the ${product.productName} by ${req.body.quantityAvailable}`
        })

    }else{
        let newProduct=await Product.create({
            productName:req.body.productName,
            productCategory:req.body.productCategory,
            productInfo:req.body.productInfo,
            price:req.body.price,
            quantityAvailable:req.body.quantityAvailable
        });
        return res.status(200).json({
            productCreated:newProduct,
            message:"product created successfully"
        })
    }
}
module.exports.updateQuantity=async function(req,res){
    let updateProduct=await Product.find({"id":req.body.productId});
    if(updateProduct){
    updateProduct[0].quantityAvailable=req.body.quantityAvailable;
    updateProduct[0].save();
    return res.status(200).json({
        updateProduct:updateProduct,
        message:`Product quantity updated to ${updateProduct[0].quantityAvailable}`
    })
    }
    else{
        return res.status(200).json({
            message:"cannot find the product"
        })
    }
}