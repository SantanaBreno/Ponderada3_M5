
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

require('dotenv').config();
const cors = require('./middleware/cors');

const app = express();
const PORT = 5000;

// const PORT_DB = process.env.PORT_DB;
// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(cors);

// const connectionString = `postgresql://postgres:ponderada123@db-ponderada.chg2sookcwy3.us-east-1.rds.amazonaws.com:5432/meus_contatos`;

// const pool = new Pool({
//     connectionString: connectionString,
//     ssl: {
//         rejectUnauthorized: false,
//       },
// });

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'meus_contatos',
//     password: 'br3n1n6969',
//     port: 5432,
// });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_DB,
});


// const pool = new Pool({
//     user: 'postgres',
//     host: 'db-ponderada.chg2sookcwy3.us-east-1.rds.amazonaws.com',
//     database: 'meus_contatos',
//     password: 'ponderada123',
//     port: 5432,
//     ssl: {
//         rejectUnauthorized: false,
//       },
// });

pool.connect();

app.use(bodyParser.json());

app.post('/contacts', async (req, res) => {
    const { nome, phone, familia } = req.body;

    try{
        const query = 'INSERT INTO contatos (nome, phone, familia) VALUES ($1, $2, $3) RETURNING *;';
        values = [nome, phone, familia];

        const result = await pool.query(query, values);
        console.log(result.rows[0])
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/contacts', async (req, res) => {
    try {
        const query = 'SELECT * FROM contatos;';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});