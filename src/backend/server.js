
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const cors = require('./middleware/cors');

const app = express();
const PORT = 5000;

app.use(cors);

const connectionString = `postgresql://postgres:ponderada123@db-ponderada.chg2sookcwy3.us-east-1.rds.amazonaws.com:5432/meus_contatos`;

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false,
      },
});

app.use(bodyParser.json());

app.post('/contacts', async (req, res) => {
    const { name, phone, family } = req.body;

    try{
        const query = 'INSERT INTO contatos (name, phone, familia) VALUES ($1, $2, $3) RETURNING *;';
        values = [name, phone, family];

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