const mysql = require('mysql2')

exports.db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "RootRoot123",
    database: "onlinestore"
});