// controllers/trackingController.js
import Tracking from '../models/Tracking.js';

export const createTracking = async (req, res) => {
  const { courier, status, location } = req.body;
  try {
    const newTracking = new Tracking({ courier, status, location });
    await newTracking.save();
    res.status(201).json(newTracking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTrackings = async (req, res) => {
  try {
    const trackings = await Tracking.find().populate('courier');
    res.json(trackings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTrackingById = async (req, res) => {
  try {
    const tracking = await Tracking.findById(req.params.id).populate('courier');
    if (!tracking) return res.status(404).json({ message: 'Tracking not found' });
    res.json(tracking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTracking = async (req, res) => {
  try {
    const tracking = await Tracking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tracking) return res.status(404).json({ message: 'Tracking not found' });
    res.json(tracking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTracking = async (req, res) => {
  try {
    const tracking = await Tracking.findByIdAndDelete(req.params.id);
    if (!tracking) return res.status(404).json({ message: 'Tracking not found' });
    res.json({ message: 'Tracking deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
