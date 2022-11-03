// Author: Dr. P. Rambabu
// npm install express
var express = require('express');
var app = express();

// set port, listen for requests
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//http://localhost:8080
app.get('/', function (req, res) {
       res.send('<h1>Demo Test</h1>');
})
    
// Connect MySQL Database
// npm install mysql - MySQL Database client for nodes
var mysql = require('mysql');

// Create Connection to MySQL
var connection = mysql.createConnection({
  host:'database-1.cutyvtwslyf9.us-east-1.rds.amazonaws.com',
  user:'root',
  password:'mysql123',
  database:'root'
});

//GET Method - Student Data: http://localhost:8080/GetStudents
app.get("/GetStudents", function(req , res){

  connection.query("SELECT * FROM project1.project1", function (err, data) {
      res.send(data);
  });

});

