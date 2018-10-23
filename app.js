var mysql = require('mysql');

var con = mysql.createConnection({
  host: "prayangt.cdph6mbdy7km.us-east-2.rds.amazonaws.com",
  user: "prayangt",
  password: "prayangt",
  database: "prayangt",
  port: "3306"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
