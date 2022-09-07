const express=require('express');
const router=express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const orderController=require('../controllers/orderController');
router.post('/create',jsonParser,orderController.createOrders);
module.exports=router;