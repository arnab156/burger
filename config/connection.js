var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "fyzxtnr55v8cgvgw",
    password: "bhmmlljoze5ic5ky",
    database: "uq85bkj4z3srd5ui",
  });

// var connection = mysql.createConnection(process.env.jawsdb-cubic-94621);
  
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
  