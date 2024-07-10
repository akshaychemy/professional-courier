import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCouriers, createCourier } from '../../api/api';

// Async thunk to fetch couriers from API
export const getCouriers = createAsyncThunk('couriers/getCouriers', async () => {
  const response = await fetchCouriers();
  return response.data;
});

// Async thunk to add a new courier via API
export const addCourier = createAsyncThunk('couriers/addCourier', async (courier) => {
  const response = await createCourier(courier);
  return response.data;
});

// Initial state for couriers slice
const initialState = {
  couriers: [],
  status: 'idle',
  error: null,
};

// Courier slice with reducers and async reducers using builder callback
const courierSlice = createSlice({
  name: 'couriers',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCouriers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCouriers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.couriers = action.payload;
      })
      .addCase(getCouriers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCourier.fulfilled, (state, action) => {
        state.couriers.push(action.payload);
      });
  },
});

// Selector function to retrieve all couriers from state
export const selectAllCouriers = (state) => state.couriers.couriers;

// Exporting reducer and actions
export const { /* export any synchronous actions here if needed */ } = courierSlice.actions;
export default courierSlice.reducer;
