const Booking = require('../models/booking.model');

/*exports.createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
*/
exports.createBooking = async (req, res) => {
  try {
    const { date, start_time } = req.body;

    // Check if there is a pre-existing booking at the specified date and start time
 /*   const existingBooking = await Booking.findOne({
      where: {
        date: date,
        start_time: start_time
      }
    });

    if (existingBooking) {
      return res.status(409).json({ message: 'Booking already exists at this time and date' });
    }
*/
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
