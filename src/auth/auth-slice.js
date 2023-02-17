import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: '', email: '' };

      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      // state.isLoggedIn = true;
      state.isRefreshing = true;
    },
  },
});

export const authReducer = authSlice.reducer;
