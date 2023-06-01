const express = require("express");
var mysql = require('mysql');
var cors = require('cors')
let app = express()
app.use(express.json())
app.use(cors())
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'RaGuL@08',
    database: 'angularpro'
  });
  connection.connect();
  app.get('/getall', (req, res) => {
    
    let sql =`select id,name,email,age,teams from angularusers ;`
    connection.query(sql, function (error, results) {
  
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
        else{
        
  
        res.json(results);
        }
  
  
  
  
    });
  })
  app.listen(8000, () => {
    console.log("listening on  port 8000")
  })