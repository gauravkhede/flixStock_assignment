# flixStock_assignment
connect to localhost:8000 inorder to run.
 command npm init to install all the related dependencies.
 
 nodemon index.js to start the server :
  As I am using mongodb Atlas no need to configure database just use it as it is.
  
  To create customer: (POST REQUEST)
  Link :  localhost:8000/createCustomer
  body should be in json and of the form 
  {
"name":"Gaurav",
"phone":"8839824402",
"email":"gauravkhede1@gmail.com"
} 
run it in postman.


To create Product: (POST REQUEST)
link: localhost:8000/product/create
Body should be in json of the form :
{
"productName":"Vivo Mobile",
"productCategory":"Mobile",
"productInfo":"Available",
"price":9999,
"quantityAvailable":117

}


To place an order: (POST REQUEST)
link: localhost:8000/order/create
Body should of the form :
{
    "customerId":"6317b56deec5352835b36c70",
    "productList":["631837e217095f8bb98bf138"],
    "paymentInfo":"done",
    "Type":"Online"
}

To update the product: (POST REQUEST)
link : localhost:8000/product/update
Body should be of the form:
{
    "productId":"631837e217095f8bb98bf138",
    "quantityAvailable":13
}
To fetch the specific customer details:  (GET REQUEST)
link: localhost:8000/fetchSpecificCustomerOrderList/6317bb9f1e7ae485c5b105ab

thanks and enjoy localhost:8000

