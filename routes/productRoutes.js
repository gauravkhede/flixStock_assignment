const express=require('express');
const router=express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const productController=require('../controllers/productController');
router.post('/create',jsonParser,productController.createProduct);
router.post('/update',jsonParser,productController.updateQuantity);
module.exports=router;