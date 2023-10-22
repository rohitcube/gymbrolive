const Booking = require('../models/booking.model');
const { Op } = require('sequelize'); // Import the Op object from Sequelize

exports.createBooking = async (req, res) => {
  try {
    const { date, start_time } = req.body;
    const newBooking = await Booking.create(req.body);
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBookingsForStudent = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { student_name: req.params.student_name } });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBookingById = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBookingByTele = async (req, res) => {
  const tele_id = req.params.tele_id;
  console.log(tele_id);
  if (!req.params.tele_id)  {
    res.status(400).send({
      message: "Telegram ID is required."
    });
    return;
  }
  try {
    const booking = await Booking.findOne({ where: { tele_id: req.params.tele_id } });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found'});
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBooking = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await booking.update(req.body);
    res.status(200).json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await booking.destroy();
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
