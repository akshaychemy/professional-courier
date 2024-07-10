import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../store/reducers/notificationReducer';

const NotificationForm = () => {
  const [formData, setFormData] = useState({ message: '', date: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotification(formData));
    setFormData({ message: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <input
        type="date"
        placeholder="Date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <button type="submit">Add Notification</button>
    </form>
  );
};

export default NotificationForm;
