const Feedback = require('../models/feedback.model');

/*xports.createFeedback = async (req, res) => {
    if (!req.body.email || !req.body.paragraph)  {
        res.status(400).send({
          message: "Email and message are required."
        });
        return;
      }
};
*/
exports.createFeedback = async (req, res) => {
    try {
        if (!req.body.email || !req.body.paragraph)  {
            res.status(400).send({
              message: "Email and message are required."
            });
        }
  
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
      const newFeedback = await Feedback.create(req.body);
      res.status(201).json({ message: 'Feedback sent successfully', feedback: newFeedback });
    } catch (error) {
      res.status(400).json({ error: 'Feedback could not be sent' });
    }
  };