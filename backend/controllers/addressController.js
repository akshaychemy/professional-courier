// controllers/addressController.js
import Address from '../models/Address.js';

export const createAddress = async (req, res) => {
  const { street, city, state, postalCode, country } = req.body;
  try {
    const newAddress = new Address({ street, city, state, postalCode, country });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json({ message: 'Address deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
