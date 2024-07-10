// models/Courier.js
import mongoose from 'mongoose';

const CourierSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  origin: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
  package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

const Courier = mongoose.model('Courier', CourierSchema);
export default Courier;
