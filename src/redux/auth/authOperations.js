import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/user-api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await contactsAPI.register(credentials);
      if (response) {
        return response;
      } else {
        return thunkApi.rejectWithValue('Please, try again');
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await contactsAPI.login(credentials);
      if (response) {
        return response;
      } else {
        return thunkApi.rejectWithValue('No such user. Please, try again');
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const response = await contactsAPI.logout();
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return;
      }
      const response = await contactsAPI.refresh(persistedToken);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
