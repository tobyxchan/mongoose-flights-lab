const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsController.new);
// POST /tickets
router.post('/flights/:id/tickets', ticketsController.create);
// POST /flights/:id/tickets

module.exports = router;