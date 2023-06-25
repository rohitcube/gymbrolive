const express = require('express');
const { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } = require('../controllers/booking.controller');
const { create, findAll, findOne, login, deleterecord, update } = require('../controllers/record.controller');

const router = express.Router();

router.get('/bookings', getAllBookings);
router.get('/booking/:bookingId', getBookingById);
router.post('/booking', createBooking);
router.patch('/booking/:bookingId', updateBooking);
router.delete('/booking/:bookingId', deleteBooking);

router.post("/records", create);
router.get("/:stu_num", findOne);
router.put("/:id", update);
router.delete("/:id", deleterecord);
router.post("/login", login);



module.exports = router