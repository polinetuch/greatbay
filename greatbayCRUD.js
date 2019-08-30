var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "greatbay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

var inquirer = require("inquirer");

// function to start Great Bay by choosing one of the options
var startGB = function() {
  inquirer
    .prompt([
      {
        name: "select-option",
        type: "list",
        message: "What would you like to do?",
        choices: ["Post", "Bid", "Exit"]
      }
    ])
    .then(function(response) {
      console.log(response);
    });
};

startGB();
