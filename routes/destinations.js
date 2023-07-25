const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/destinations');


router.post('/flights/:id/destinations', flightsController.create);

module.exports = router;