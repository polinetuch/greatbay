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

// function to prompt users with three options

// switch (command) {
//   case "start-GB":
//   function selectionOption() {
//   }.then(function(response) {
//     inquirer.prompt([
//       {
//         name: "option",
//         message: "What would you like to do?",
//         type: "list",
//         choices: "Post", "Bid", "Exit"
//       }
//     ])
//   })
//   break,
// }
// selectionOption();

var inquirer = require("inquirer");
// function startDB(response) {
   inquirer.prompt ([
    {
      name: "select-option",
      type: "list",
      message: "What would you like to do?",
      choices: ["Post", "Bid", "Exit"]
    }
  ])
// }
