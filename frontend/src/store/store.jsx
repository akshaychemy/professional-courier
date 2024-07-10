import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import courierReducer from './reducers/courierReducer';
import addressReducer from './reducers/addressReducer';
import packageReducer from './reducers/packageReducer';
import trackingReducer from './reducers/trackingReducer';
import paymentReducer from './reducers/paymentReducer';
import notificationReducer from './reducers/notificationReducer';
import serviceReducer from './reducers/serviceReducer';

export const store = configureStore({
  reducer: {
    users: userReducer,
    couriers: courierReducer,
    addresses: addressReducer,
    packages: packageReducer,
    trackings: trackingReducer,
    payments: paymentReducer,
    notifications: notificationReducer,
    services: serviceReducer,
  },
});
