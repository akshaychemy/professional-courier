import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPayment } from '../store/reducers/paymentReducer';

const PaymentForm = () => {
  const [formData, setFormData] = useState({ amount: '', method: '', date: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPayment(formData));
    setFormData({ amount: '', method: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <input
        type="text"
        placeholder="Method"
        value={formData.method}
        onChange={(e) => setFormData({ ...formData, method: e.target.value })}
      />
      <input
        type="date"
        placeholder="Date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <button type="submit">Add Payment</button>
    </form>
  );
};

export default PaymentForm;
