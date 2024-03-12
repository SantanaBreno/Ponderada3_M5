
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');


const app = express();
const PORT = 3000;

const connectionString = `postgresql://postgres:ponderada123@db-ponderada.chg2sookcwy3.us-east-1.rds.amazonaws.com:5432/db-ponderada`;

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
        const query = 'INSERT INTO contatos (name, phone, family) VALUES ($1, $2, $3) RETURNING *';
        values = [name, phone, family];

        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/contacts', async (req, res) => {
    try {
        const query = 'SELECT * FROM contatos';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});