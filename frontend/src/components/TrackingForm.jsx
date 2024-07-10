import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTracking } from '../store/reducers/trackingReducer';

const TrackingForm = () => {
  const [formData, setFormData] = useState({ packageId: '', status: '', location: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTracking(formData));
    setFormData({ packageId: '', status: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Package ID"
        value={formData.packageId}
        onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
      />
      <input
        type="text"
        placeholder="Status"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <button type="submit">Add Tracking</button>
    </form>
  );
};

export default TrackingForm;
