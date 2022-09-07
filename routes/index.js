const express=require('express');
const router=express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const customerController=require('../controllers/customerController');
router.post('/createCustomer',jsonParser,customerController.createCustomer);
module.exports=router;