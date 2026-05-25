const express = require('express');
const router = express.Router();

const propiedadesController = require('../controllers/propiedadesController');

router.get('/', propiedadesController.getPropiedades);

module.exports = router;