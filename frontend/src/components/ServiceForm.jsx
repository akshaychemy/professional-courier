import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService } from '../store/reducers/serviceReducer';

const ServiceForm = () => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(formData));
    setFormData({ name: '', description: '', price: '' });
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
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
