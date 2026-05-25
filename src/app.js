const express = require('express');
const cors = require('cors');

const propiedadesRoutes = require('./routes/propiedadesRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/propiedades', propiedadesRoutes);

module.exports = app;