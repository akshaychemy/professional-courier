import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../store/reducers/notificationReducer';
import NotificationForm from '../components/NotificationForm';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <div>
      <h1>Notifications</h1>
      <NotificationForm />
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>{notification.message} - {notification.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
