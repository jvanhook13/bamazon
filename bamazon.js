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


  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts() ;

    
  });

  function displayProducts() {

    var query = connection.query("SELECT * FROM products" , function(err, res) {
        if (err) throw err; {
          console.table(res);
        }
      });
    
      // logs the actual query being run
      console.log(query.sql);
      connection.end();
    }


  
  
//   function buyProducct() {
//     inquirer
//       .prompt({
//         name: "amount",
//         type: "input",
//         message: "What product ID are you looking for?",
//         choices: [
//           ,
//           "Find all artists who appear more than once",
//           "Find data within a specific range",
//           "Search for a specific song",
//           "exit"
//         ]
//       })
//       .then(function(answer) {
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
//   }