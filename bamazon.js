var inquirer = require("inquirer")
var fs = require("fs")
var chalk = require("chalk")
var mysql = require("mysql")


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

            }]
        )
        .then(function (answer) {
            console.log(answer, "zzzz")

            var selectedItem = answer.item;
            console.log(selectedItem, "reeee")
            var selectedAmount = answer.amount;

            connection.query(
                "SELECT * FROM products WHERE prodID=?", [selectedItem],
                function (err, res) {

                    if (err) throw err; {
                        var currentInventory = res[0].quantity
                        console.log(currentInventory)
                        var newInventory = currentInventory -= selectedAmount ;
                        console.log(newInventory)
                    }

                    // logs the actual query being run
                
                    connection.end();
                });




        })
}


//         switch (answer.action) {
//         case "Find songs by artist":
//           artistSearch();
//           break;

//         case "Find all artists who appear more than once":
//           multiSearch();
//           break;

//         case "Find data within a specific range":
//           rangeSearch();
//           break;

//         case "Search for a specific song":
//           songSearch();
//           break;

//         case "exit":
//           connection.end();
//           break;
//         }
//       });