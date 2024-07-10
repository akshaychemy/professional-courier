import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../store/reducers/notificationReducer';

const NotificationForm = () => {
  const dispatch = useDispatch();
  const [notificationData, setNotificationData] = useState({
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotificationData({ ...notificationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotification(notificationData));
    // Optionally, you can reset the form fields after submission
    setNotificationData({ title: '', message: '' });
  };

  return (
    <div>
      <h2>Create Notification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={notificationData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={notificationData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NotificationForm;
