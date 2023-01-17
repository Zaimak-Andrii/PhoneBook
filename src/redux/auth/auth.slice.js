import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { login, logout, refresh, register } from 'services/auth';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
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
      })
      .addMatcher(login.matchPending, (state, action) => {
        console.log('Login pending', action.type);
      })
      .addMatcher(logout.matchPending, (state, action) => {
        console.log('Logout pending', action.type);
      })
      .addMatcher(register.matchFulfilled, (state, action) => {
        console.log('Register fulfilled', action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(login.matchFulfilled, (state, action) => {
        console.log('Login fulfilled', action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(refresh.matchFulfilled, (state, action) => {
        console.log('Refresh fulfilled', action.payload);
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(logout.matchFulfilled, (_, action) => {
        console.log('Logout fulfilled', action);
        return { ...initialState };
      })
      .addMatcher(register.matchRejected, (state, action) => {
        console.log('rejected', action);
      });
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const authReducer = authSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, authReducer);
