import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddresses, createAddress } from '../../api/api';

// Async thunk to fetch addresses from API
export const getAddresses = createAsyncThunk('addresses/getAddresses', async () => {
  const response = await fetchAddresses();
  return response.data;
});

// Async thunk to add a new address via API
export const addAddress = createAsyncThunk('addresses/addAddress', async (address) => {
  const response = await createAddress(address);
  return response.data;
});

// Initial state for addresses slice
const initialState = {
  addresses: [],
  status: 'idle',
  error: null,
};

// Address slice with reducers and async reducers using builder callback
const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddresses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAddresses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addresses = action.payload;
      })
      .addCase(getAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload);
      });
  },
});

// Selector function to retrieve all addresses from state
export const selectAllAddresses = (state) => state.addresses.addresses;

// Exporting reducer and actions
export const { /* export any synchronous actions here if needed */ } = addressSlice.actions;
export default addressSlice.reducer;
