import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourier } from '../store/reducers/courierReducer';

const CourierForm = () => {
  const [formData, setFormData] = useState({ name: '', contactInfo: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourier(formData));
    setFormData({ name: '', contactInfo: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contact Info"
        value={formData.contactInfo}
        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
      />
      <button type="submit">Add Courier</button>
    </form>
  );
};

export default CourierForm;
