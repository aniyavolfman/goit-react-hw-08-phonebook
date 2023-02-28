import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraRedusers:{},}
)

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);