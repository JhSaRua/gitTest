var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 5,
    host     : 'localhost',
    user     : 'root',
    password : 'root1!',
    database : 'statics'
});

module.export = pool;