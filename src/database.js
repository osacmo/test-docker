const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysqldb',
    user: 'root',
    port: '3306',
    password: 'secret',
    database: 'example_db'
});

module.exports = connection;
