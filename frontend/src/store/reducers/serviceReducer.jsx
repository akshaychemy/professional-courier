import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchServices, createService } from '../../api/api';

// Async thunk to fetch services from API
export const getServices = createAsyncThunk('services/getServices', async () => {
  const response = await fetchServices();
  return response.data;
});

// Async thunk to add a new service via API
export const addService = createAsyncThunk('services/addService', async (service) => {
  const response = await createService(service);
  return response.data;
});

// Initial state for services slice
const initialState = {
  services: [],
  status: 'idle',
  error: null,
};

// Service slice with reducers and async reducers using builder callback
const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.services.push(action.payload);
      });
  },
});

// Selector function to retrieve all services from state
export const selectAllServices = (state) => state.services.services;

// Exporting reducer as default
export default serviceSlice.reducer;
