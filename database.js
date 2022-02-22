const mysql = require("mysql");

//we  shoudl replace this info with .env file.
require("dotenv").config();

let details = {
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWD,
  database: process.env.DBNAME,
};

let connection = mysql.createConnection(details);
connection.connect((error)=>{
    if(error){
        console.log(error);
    } else {
        console.log("Connected to MySQL");
    }
});

//connection.query("mysql query",(errors, records)=>{});
// connection.query("select * from users", (errors,records) =>{
//     if(errors){
//         console.log(errors);
//     } else {
//         console.log(records);
//     }
// });

// connection.query("select * from books", (errors,records) =>{
//     if(errors){
//         console.log(errors);
//     } else {
//         console.log(records);
//     }
// });

module.exports = {connection};