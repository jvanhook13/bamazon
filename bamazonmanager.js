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


var invenADD;
var selectedItem;


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


    ).then(function (answer) {

            console.log(answer, "this one")



            switch (answer.item) {



                case ('View Products'):

                    connection.query("SELECT * FROM products", function (err, res) {
                        if (err) throw err;


                        {
                            console.table(res);
                        }


                    })
                    connection.end()
                    break;

                case ('View Low Inventory'):

                    connection.query("SELECT * FROM products WHERE quantity BETWEEN ? and ? ", [0, 45], function (err, res) {

                        if (err) throw err;

                        {
                            console.table(res);
                        }



                        connection.end()
                    })
                    break;



                    // case ('Add to Inventory'):

                    //     inquirer.prompt(

                    //         [{

                    //                 name: "item",
                    //                 type: "input",
                    //                 message: "Which product are we adding to?",


                    //             },

                    //             {
                    //                 name: "amount",
                    //                 type: "input",
                    //                 message: "How much would you like to add?"


                    //             }

                    //         ]).then(function (answer) {

                    //         var selectedItem = answer.item
                    //         invenADD = answer.amount

                    //         connection.query("SELECT * FROM products WHERE prodID=?", [selectedItem], function (err, res) {
                    //             if (err) throw err;

                    //             {

                    //                 var oldAmount = res[0].quantity



                    //                 console.log(invenADD , "what are you")


                    //                 function newAmount (oldAmount, invenADD) {
                    //                     if (invenADD == 0) {
                    //                         return oldAmount;
                    //                     } else {
                    //                         newAmount(oldAmount ^ invenADD, (oldAmount & invenADD) << 1)

                    //                         connection.query("UPDATE products SET quantity=? WHERE prodID=?", [newAmount, selectedItem], function (err, res) {

                    //                             if (err) throw err ;


                    //                         })

                    //                         connection.query("SELECT * FROM products", function (err, res) {

                    //                             if (err) throw err ;

                    //                             {console.table(res)}


                    //                         })

                    //                     }
                    //                 };

                    //                 newAmount()
                    /// SOOOOO this works except that using the + concats my database rather actually adding it, so I tried to find some work arounds and tried a recursion loop but val.slice isnt a function error gets thrown and Im honestly lost

                case ('Add New Product'):
                    var prodName;
                    var depName;
                    var price;
                    var quantity;


                    inquirer.prompt([

                        {

                            name: "prod",
                            type: "input",
                            message: "What is the product name"

                        },

                        {

                            name: "dep",
                            type: "input",
                            message: "What is the department name"

                        },

                        {

                            name: "price",
                            type: "input",
                            message: "What is the product price"

                        },

                        {

                            name: "quant",
                            type: "input",
                            message: "How much do we have?"

                        }
                    ]).then(function (answer) {

                            prodName = answer.prod
                            depName = answer.dep
                            price = answer.price
                            quantity = answer.quant
                            var prodID ;


                            connection.query("INSERT INTO products VALUE(? , ? , ? , ? , ?)", [prodID, prodName, depName, price, quantity], function (err, res) {

                                    if (err) throw err;

                                }),

                                connection.query("SELECT * FROM products"),
                                function (err, res) {

                                    if (err) throw err;

                                    {
                                        console.table(res)
                                    }

                                

                       

                    }

                  

            }




        )}})