import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/reducers/userReducer';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({ name: '', email: '', password: '', role: '' });
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
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
