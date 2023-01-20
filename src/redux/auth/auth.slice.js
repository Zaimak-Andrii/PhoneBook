import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { login, logout, refresh, register } from 'services/authAPI';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addMatcher(register.matchPending, (state, action) => {
        console.log('Register pending', action);
      })
      .addMatcher(refresh.matchPending, (state, action) => {
        console.log('Refresh pending', action.type);
        state.isRefreshing = true;
      })
      .addMatcher(login.matchPending, (state, action) => {
        console.log('Login pending', action.type);
      })
      .addMatcher(logout.matchPending, (state, action) => {
        console.log('Logout pending', action.type);
      })
      .addMatcher(register.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(login.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(refresh.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isRefreshing = false;
      })
      .addMatcher(logout.matchFulfilled, () => ({ ...initialState }))
      .addMatcher(register.matchRejected, (state, action) => {
        console.log('Register rejected', action);
      })
      .addMatcher(login.matchRejected, (state, action) => {
        console.log('Login rejected', action);
      })
      .addMatcher(logout.matchRejected, state => ({ ...initialState }))
      .addMatcher(refresh.matchRejected, state => {
        state.token = null;
        state.isRefreshing = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = authSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, authReducer);
