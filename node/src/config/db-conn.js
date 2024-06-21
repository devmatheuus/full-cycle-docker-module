const mysql = require('mysql');

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

let dbConn;

try {
    dbConn = mysql.createConnection(config)
} catch (error) {
    console.log('Error on create db connection', error)
}

module.exports = dbConn;
