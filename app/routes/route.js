const express = require('express');
const { getAllBookings, getBookingById, getBookingByTele, getAllBookingsForStudent, createBooking, updateBooking, deleteBooking } = require('../controllers/booking.controller');
const { create, findAll, findOne, login, deleterecord, update, deleteAll } = require('../controllers/record.controller');
const { createFeedback } = require('../controllers/feedback.controller');

const router = express.Router();

router.get('/bookings', getAllBookings);
router.get('/booking/:bookingId', getBookingById);
router.get('/bookingstudent/:student_name', getAllBookingsForStudent);
router.get('/bookingtele/:tele_id', getBookingByTele);
router.post('/booking', createBooking);
router.patch('/booking/:bookingId', updateBooking);
router.delete('/booking/:bookingId', deleteBooking);

router.post("/records", create);
router.get("/:stu_num", findOne);
router.put("/:id", update);
router.delete("/:id", deleterecord);
router.post("/login", login);
//router.delete("/records/deleteall", deleteAll);
router.post("/feedback", createFeedback);



module.exports = router