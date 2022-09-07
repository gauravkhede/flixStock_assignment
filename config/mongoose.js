const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://gaurav_khede:Q9mKvwGGiWkw5KSa@cluster0.gy90rwq.mongodb.net/flixStock_Assignment?retryWrites=true');


const db=mongoose.connection;


db.on('error',console.error.bind(console,'Error connecting to mongoDb'));

db.once('open',function(){
    console.log('Connected to database:: MongoDB');
});
module.exports=db;