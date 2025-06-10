const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'aiypwzqp',
  port: 5432,
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Inserta los datos recibidos en la tabla usuarios
    await pool.query(
      'INSERT INTO usuarios (username, password) VALUES ($1, $2)',
      [username, password]
    );
    res.json({ success: true }); // Siempre responde éxito
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.listen(4000, () => console.log('Servidor backend en http://localhost:4000'));