import { createStandaloneToast } from '@chakra-ui/react';
import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { login, logout, refresh, register } from 'services/authAPI';
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from 'services/contactsAPI';

const { toast } = createStandaloneToast();

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isRefreshing: false,
};
const resetUser = () => initialState;
const authError = (state, { payload: { status } }) => {
  if (status === 401) {
    toast({
      title: 'Authorization error!',
      description: 'Please authenticate.',
      status: 'error',
      duration: 2000,
      position: 'bottom-right',
      isClosable: true,
    });
    return initialState;
  }
  return state;
};
const authUser = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addMatcher(register.matchPending, (state, action) => {
      //   console.log('Register pending', action);
      // })
      .addMatcher(refresh.matchPending, (state, action) => {
        state.isRefreshing = true;
      })
      // .addMatcher(login.matchPending, (state, action) => {
      //   console.log('Login pending', action.type);
      // })
      // .addMatcher(logout.matchPending, (state, action) => {
      //   console.log('Logout pending', action.type);
      // })
      .addMatcher(register.matchFulfilled, authUser)
      .addMatcher(login.matchFulfilled, authUser)
      .addMatcher(refresh.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isRefreshing = false;
      })
      .addMatcher(logout.matchFulfilled, resetUser)
      // .addMatcher(register.matchRejected, (state, action) => {
      //   console.log('Register rejected', action);
      // })
      // .addMatcher(login.matchRejected, (state, action) => {
      //   console.log('Login rejected', action);
      // })
      .addMatcher(logout.matchRejected, authError)
      .addMatcher(refresh.matchRejected, state => {
        state.token = null;
        state.isRefreshing = false;
      })
      .addMatcher(getContacts.matchRejected, authError)
      .addMatcher(addContact.matchRejected, authError)
      .addMatcher(updateContact.matchRejected, authError)
      .addMatcher(deleteContact.matchRejected, authError);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = authSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, authReducer);
