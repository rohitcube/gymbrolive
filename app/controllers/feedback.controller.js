const Feedback = require('../models/feedback.model');

exports.createFeedback = async (req, res) => {
    try {
      if (!req.body.email || !req.body.paragraph) {
        res.status(400).send({
          message: "Email and message are required."
        });
        return;
      }
  
      const newFeedback = await Feedback.create(req.body);
      res.status(201).json({ message: 'Feedback sent successfully', feedback: newFeedback });
    } catch (error) {
      res.status(400).json({ error: 'Feedback could not be sent' });
    }
  };
  
  exports.getAllFeedback = async (req, res) => {
    try {
      const feedback = await Feedback.findAll();
      res.status(200).json(feedback);
    } catch (error) {
      res.status(400).json({ error: 'Error while fetching feedback' });
    }
  };

  
  exports.getFeedbackById = async (req, res) => {
    const { feedbackId } = req.params;
    try {
      const feedback = await Feedback.findByPk(feedbackId);
      if (!feedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }
      res.status(200).json(feedback);
    } catch (error) {
      res.status(400).json({ error: 'Error while fetching feedback' });
    }
  };
  
  exports.updateFeedback = async (req, res) => {
    const { feedbackId } = req.params;
    try {
      const feedback = await Feedback.findByPk(feedbackId);
      if (!feedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }
      await feedback.update(req.body);
      res.status(200).json({ message: 'Feedback updated successfully', feedback });
    } catch (error) {
      res.status(400).json({ error: 'Error while updating feedback' });
    }
  };
  
  exports.deleteFeedback = async (req, res) => {
    const { feedbackId } = req.params;
    try {
      const feedback = await Feedback.findByPk(feedbackId);
      if (!feedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }
      await feedback.destroy();
      res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Error while deleting feedback' });
    }
  };
  