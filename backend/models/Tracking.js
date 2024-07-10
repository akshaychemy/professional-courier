// models/Tracking.js
import mongoose from 'mongoose';

const TrackingSchema = new mongoose.Schema({
  courier: { type: mongoose.Schema.Types.ObjectId, ref: 'Courier', required: true },
  status: { type: String, required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Tracking = mongoose.model('Tracking', TrackingSchema);
export default Tracking;
