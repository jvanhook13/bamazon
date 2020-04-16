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



});


inquirer.prompt(

    [{
            name: "item",
            type: "list",
            message: "What are we doing today?",
            choices: ['View Products', 'View Low Inventory', 'Add to Inventory', 'Add New Product']

        },

    ]


).then( function (answer) {
        
    console.log(answer, "this one")



        switch (answer.item) {



            case ('View Products'):

                connection.query("SELECT * FROM products", function (err, res) {
                    if (err) throw err;


                    {console.table(res);}


                })

                break;

            case('View Low Inventory'):
            
            connection.query("SELECT * FROM products WHERE quantity BETWEEN ? and ? ", [0, 45], function(err, res) {

                if(err) throw err ;

                {console.table(res);}


            })


        }
    })