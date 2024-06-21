const dbConn = require('../config/db-conn')

function createTable() {
    if(!dbConn) {
        console.log('Error on create table: dbConn not found')
        return;
    }

    const query = 'CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))'
    dbConn.query(query, (err) => {
        if (err) console.log('Error on create table', err)
    })
}

module.exports = createTable;