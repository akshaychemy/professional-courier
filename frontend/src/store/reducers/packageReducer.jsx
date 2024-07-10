import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPackages, createPackage } from '../../api/api';

// Async thunk to fetch packages from API
export const getPackages = createAsyncThunk('packages/getPackages', async () => {
  const response = await fetchPackages();
  return response.data;
});

// Async thunk to add a new package via API
export const addPackage = createAsyncThunk('packages/addPackage', async (packageData) => {
  const response = await createPackage(packageData);
  return response.data;
});

// Initial state for packages slice
const initialState = {
  packages: [],
  status: 'idle',
  error: null,
};

// Package slice with reducers and async reducers using builder callback
const packageSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPackages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.packages = action.payload;
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPackage.fulfilled, (state, action) => {
        state.packages.push(action.payload);
      });
  },
});

// Selector function to retrieve all packages from state
export const selectAllPackages = (state) => state.packages.packages;

// Exporting reducer as default
export default packageSlice.reducer;
