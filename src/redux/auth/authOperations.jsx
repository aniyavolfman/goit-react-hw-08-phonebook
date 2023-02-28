import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
        const response = await contactsAPI.register(credentials);
        console.log(response)
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
