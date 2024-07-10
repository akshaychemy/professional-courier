// models/Payment.js
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  courier: { type: mongoose.Schema.Types.ObjectId, ref: 'Courier', required: true },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  transactionId: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;
