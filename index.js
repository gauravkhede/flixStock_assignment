const express=require('express');
const app=express();
const port=8000;
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
const db=require('./config/mongoose');
app.use('/',require('./routes'));
app.listen(port,function(){
    console.log("App is running succesfully on port number",port);
});