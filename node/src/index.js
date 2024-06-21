const express = require('express');
const app = express();
const createTable = require('./utils/create-table');
const dbConn = require('./config/db-conn');

app.get('/', async (req, res) => {
    const createUser = async () => {
        const sql = `INSERT INTO peoples(nome) values('Matheus - ${new Date().getTime()}')`;
        
        try {
            dbConn.query(sql);
            console.log('User created');
        } catch (error) {
            console.log('Error on create user', error);
        }
    }
    await createUser();

    return res.send("<h1>Full Cycle Rocks!</h1>")
})

app.listen(3000, () => {
    createTable();
    console.log('App listen on port 3000');
})