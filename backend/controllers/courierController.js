// controllers/courierController.js
import Courier from '../models/Courier.js';

export const createCourier = async (req, res) => {
  const { sender, recipient, origin, destination, package: packageId, status } = req.body;
  try {
    const newCourier = new Courier({ sender, recipient, origin, destination, package: packageId, status });
    await newCourier.save();
    res.status(201).json(newCourier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCouriers = async (req, res) => {
  try {
    const couriers = await Courier.find().populate('sender recipient origin destination package');
    res.json(couriers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCourierById = async (req, res) => {
  try {
    const courier = await Courier.findById(req.params.id).populate('sender recipient origin destination package');
    if (!courier) return res.status(404).json({ message: 'Courier not found' });
    res.json(courier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCourier = async (req, res) => {
  try {
    const courier = await Courier.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!courier) return res.status(404).json({ message: 'Courier not found' });
    res.json(courier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCourier = async (req, res) => {
  try {
    const courier = await Courier.findByIdAndDelete(req.params.id);
    if (!courier) return res.status(404).json({ message: 'Courier not found' });
    res.json({ message: 'Courier deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
