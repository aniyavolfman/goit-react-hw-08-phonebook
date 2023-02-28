import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// selectors

export const getContactsFilter = state => state.filterData;
