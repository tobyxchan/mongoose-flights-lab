const express = require('express');
const router = express.Router();
// Create the controller module
const flightsController = require('../controllers/flights');

// GET /flights
router.get('/', flightsController.index);
// GET /flights/new
router.get('/new', flightsController.new);
// GET /flights/:id
router.get('/:id', flightsController.show);
// POST /flights
router.post('/', flightsController.create);


module.exports = router;