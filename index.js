const express = require('express');
const pg = require('pg');
require('dotenv').config();



const app = express();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl: true
})

app.get('/', (req, res) => {
    res.send('hello 11112222221')
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})



app.listen(3000);
console.log('server start');