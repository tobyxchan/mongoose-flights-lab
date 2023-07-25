const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

async function newTicket(req, res) {
    try {
    const flight = await Flight.findById(req.params.id).sort('seat');
    res.render('tickets/new', { title: 'Add Ticket', flight });
    } catch (err){}
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id).sort('seat');
    const ticket = new Ticket(req.body);
    ticket.flight = flight;
    await ticket.save();
    res.redirect(`/flights/${flight._id}`);
};