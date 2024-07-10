import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPayments, createPayment } from '../../api/api';

// Async thunk to fetch payments from API
export const getPayments = createAsyncThunk('payments/getPayments', async () => {
  const response = await fetchPayments();
  return response.data;
});

// Async thunk to add a new payment via API
export const addPayment = createAsyncThunk('payments/addPayment', async (payment) => {
  const response = await createPayment(payment);
  return response.data;
});

// Initial state for payments slice
const initialState = {
  payments: [],
  status: 'idle',
  error: null,
};

// Payment slice with reducers and async reducers using builder callback
const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPayments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPayments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.payments = action.payload;
      })
      .addCase(getPayments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPayment.fulfilled, (state, action) => {
        state.payments.push(action.payload);
      });
  },
});

// Selector function to retrieve all payments from state
export const selectAllPayments = (state) => state.payments.payments;

// Exporting reducer as default
export default paymentSlice.reducer;
