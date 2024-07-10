// models/Package.js
import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
});

const Package = mongoose.model('Package', PackageSchema);
export default Package;
