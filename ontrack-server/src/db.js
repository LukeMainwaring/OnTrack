const mysql = require('mysql');

// connection configurations
/*
TODO: figure out how to containerize db and connect in docker-compose
var connection = mysql.createConnection({
  host: 'ontrack-db',
  user: 'root',
  password: 'belly123',
  database: 'luke_dev'
});
*/

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'belly123',
  database: 'luke_dev'
});
// connect to database
connection.connect();

module.exports = connection;
