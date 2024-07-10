// controllers/packageController.js
import Package from '../models/Package.js';

export const createPackage = async (req, res) => {
  const { description, weight, dimensions } = req.body;
  try {
    const newPackage = new Package({ description, weight, dimensions });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPackageById = async (req, res) => {
  try {
    const packageData = await Package.findById(req.params.id);
    if (!packageData) return res.status(404).json({ message: 'Package not found' });
    res.json(packageData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const packageData = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!packageData) return res.status(404).json({ message: 'Package not found' });
    res.json(packageData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePackage = async (req, res) => {
  try {
    const packageData = await Package.findByIdAndDelete(req.params.id);
    if (!packageData) return res.status(404).json({ message: 'Package not found' });
    res.json({ message: 'Package deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
