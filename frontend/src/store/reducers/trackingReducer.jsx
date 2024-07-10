import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrackings, createTracking } from '../../api/api';

// Async thunk to fetch trackings from API
export const getTrackings = createAsyncThunk('trackings/getTrackings', async () => {
  const response = await fetchTrackings();
  return response.data;
});

// Async thunk to add a new tracking via API
export const addTracking = createAsyncThunk('trackings/addTracking', async (tracking) => {
  const response = await createTracking(tracking);
  return response.data;
});

// Initial state for trackings slice
const initialState = {
  trackings: [],
  status: 'idle',
  error: null,
};

// Tracking slice with reducers and async reducers using builder callback
const trackingSlice = createSlice({
  name: 'trackings',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrackings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTrackings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trackings = action.payload;
      })
      .addCase(getTrackings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTracking.fulfilled, (state, action) => {
        state.trackings.push(action.payload);
      });
  },
});

// Selector function to retrieve all trackings from state
export const selectAllTrackings = (state) => state.trackings.trackings;

// Exporting reducer as default
export default trackingSlice.reducer;
