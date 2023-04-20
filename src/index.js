const express = require('express');
const connection = require('./database');
const app = express()
const port = 3000
const { uniqueNamesGenerator, names } = require('unique-names-generator');

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

/* app.get('/create', (req, res) => {
  const randomName = uniqueNamesGenerator({ dictionaries: [names] });
  connection.query(`INSERT INTO usuario(id, nombre) VALUES(null, ${randomName})`, function (error, results, fields) {
    if (error) throw error;
    res.send({ msg: "User created." })
  });
}); */

app.get('/users', (req, res) => {

  connection.query(`SELECT * from usuario`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send({ msg: ok })
  });
});

app.get('/', (req, res) => {
  res.send({ msg: "Hello world." })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});