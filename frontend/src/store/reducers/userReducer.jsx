import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers, createUser } from '../../api/api';

// Async thunk to fetch users from API
export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await fetchUsers();
  return response.data;
});

// Async thunk to add a new user via API
export const addUser = createAsyncThunk('users/addUser', async (user) => {
  const response = await createUser(user);
  return response.data;
});

// Initial state for users slice
const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

// User slice with reducers and async reducers using builder callback
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Additional reducers can be added here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

// Selector function to retrieve all users from state
export const selectAllUsers = (state) => state.users.users;

// Exporting reducer as default
export default userSlice.reducer;
