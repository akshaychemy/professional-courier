import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddress } from '../store/reducers/addressReducer';

const AddressForm = () => {
  const [formData, setFormData] = useState({ street: '', city: '', state: '', postalCode: '', country: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(formData));
    setFormData({ street: '', city: '', state: '', postalCode: '', country: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Street"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
      <input
        type="text"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
      />
      <input
        type="text"
        placeholder="Country"
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      />
      <button type="submit">Add Address</button>
    </form>
  );
};

export default AddressForm;
