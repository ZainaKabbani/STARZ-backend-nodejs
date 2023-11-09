# STARZ-backend-nodejs

## E-Commerce System to trade products between users.

### Technologies:
the project is created with: 
* Node.js
* Express.js
* Mongoose

### Testing: 

> **_NOTE:_**  The response may take some time due to the deployment on Atlas and Cyclic.

After downloading the project, you can import the postman collection which is named (STARZ e-commerce system.postman_collection.json).<br>
to login:<br> 
for the users: 
| Email             | Password  |
|:------------------|----------:|
| user1@gmail.com   | 123456789 |
| user2@gmail.com   | 123456789 |
| user3@gmail.com   | 123456789 | 

for the delivery men: 
| Email                 | Password  |
|:----------------------|----------:|
| delivery1@gmail.com   | 123456789 |
| delivery2@gmail.com   | 123456789 |

for the admin: 
| Email             |  Password  |
|:------------------|-----------:|
| admin@gmail.com   | 123456789  |



### Things you need to install to run the project:
* install NodeJS

### Setup:
To run this project, install it locally then follow this: 
~~~
$ cd ./STARZ-backend-nodejs
$ npm i --legacy-peer-deps
$ npm start
~~~

### Services:
* Create account and login with the ability to change password and fill the wallet.
* List the products and filter the results.
* Add product to the list of the user products and edit when needed.
* Show the details of a product, buy it, add it to the favorite and review it.
* Admin role with the ability to add a delivery man, list all the information, manage it and send emails to the users.
* Delivery role with the ability to list the undelivered orders, take orders to delivere, list the finished deliveries
  and mark orders as delivered when the delivery man has delivered the product.
