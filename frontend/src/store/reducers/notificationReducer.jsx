import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNotifications, createNotification } from '../../api/api';

// Async thunk to fetch notifications from API
export const getNotifications = createAsyncThunk('notifications/getNotifications', async () => {
  const response = await fetchNotifications();
  return response.data;
});

// Async thunk to add a new notification via API
export const addNotification = createAsyncThunk('notifications/addNotification', async (notificationData) => {
  const response = await createNotification(notificationData);
  return response.data;
});

// Initial state for notifications slice
const initialState = {
  notifications: [],
  status: 'idle',
  error: null,
};

// Notification slice with reducers and async reducers using builder callback
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNotification.fulfilled, (state, action) => {
        state.notifications.push(action.payload);
      });
  },
});

// Selector function to retrieve all notifications from state
export const selectAllNotifications = (state) => state.notifications.notifications;

// Exporting reducer and actions
export const { /* export any synchronous actions here if needed */ } = notificationSlice.actions;
export default notificationSlice.reducer;
