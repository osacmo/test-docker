const express = require('express');
const connection = require('./database');
const app = express()
const port = 3000

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.get('/', (req, res) => {
    res.send({ msg: "Hello world." })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});