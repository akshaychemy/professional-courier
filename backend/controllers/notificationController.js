// controllers/notificationController.js
import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  const { user, message, read } = req.body;
  try {
    const newNotification = new Notification({ user, message, read });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate('user');
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id).populate('user');
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
