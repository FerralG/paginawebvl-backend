const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {

  try {

    const result = await pool.query('SELECT NOW()');

    res.json({
      message: 'API funcionando 🚀',
      database_time: result.rows[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: 'Error conectando a PostgreSQL'
    });

  }

});

module.exports = app;