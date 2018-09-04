var mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Letmein@156",
//     database: "burgers_db",
//    "socketPath": "/var/run/mysqld/mysqld.sock"
//   });

var connection = mysql.createConnection(process.env.jawsdb-cubic-94621);
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  