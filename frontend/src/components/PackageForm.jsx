import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPackage } from '../store/reducers/packageReducer';

const PackageForm = () => {
  const [formData, setFormData] = useState({ description: '', weight: '', dimensions: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPackage(formData));
    setFormData({ description: '', weight: '', dimensions: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Weight"
        value={formData.weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dimensions"
        value={formData.dimensions}
        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
      />
      <button type="submit">Add Package</button>
    </form>
  );
};

export default PackageForm;
