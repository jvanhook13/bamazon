var inquirer = require("inquirer")
var chalk = require("chalk")
var mysql = require("mysql")
var newInventory;


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();

    buyProduct();


});

function displayProducts() {

    var query = connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err; {
            console.table(res);
        }
    });

    // logs the actual query being run
    console.log(query.sql);

}




function buyProduct() {
    inquirer
        .prompt(

            [{
                    name: "item",
                    type: "input",
                    message: "What product ID are you looking for?\n\n",

                },

                {
                    name: "amount",
                    type: "input",
                    message: `How much product do you want?`,

                }
            ]
        )
        .then(function (answer) {
                console.log(answer, "zzzz")

                var selectedItem = answer.item;
                console.log(selectedItem, "reeee")
                var selectedAmount = answer.amount;
                //grabs that database from mysql and querys the prod ID and returns the info about it
                connection.query(
                    "SELECT * FROM products WHERE prodID=?", [selectedItem],
                    function (err, res) {

                        if (err) throw err; {

                            if (res[0].quantity === 0 && selectedItem === 2) {
                                //i dont even watch beavis and butthead but the meme fits the time
                                console.log("NEED TP FOR MY BUNGHOLIO")

                            } else if (res[0].quantity === 0) {

                                console.log("OUT OF STOCK")



                            } else {

                                var currentInventory = res[0].quantity
                                console.log(currentInventory)
                                newInventory = currentInventory -= selectedAmount;
                                console.log(newInventory)

                            }




                            // logs the actual query being run


                        };


                        console.log(newInventory, "please be here")

                        connection.query(


                            "UPDATE products SET quantity=? WHERE prodID=?", [newInventory, selectedItem],




                        )

                        connection.query("SELECT * FROM products", function (err, res) {

                                if (err) throw err; {



                                    console.table(res);



                                }

                        connection.query("SELECT * FROM products WHERE prodid=?", [selectedItem] , function (err, res) {

                                    if (err) throw err; {
    
    
                                        var price = res[0].price 

                                        var total = price *= selectedAmount

                                        console.log("Your price is $" ,total)

    
    
    
                                    }
    







                            



                        })




           
                    })
        })})}