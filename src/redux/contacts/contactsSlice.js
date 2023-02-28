import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';
import { getContactsFilter } from 'redux/filter/filterSlice';

const initialState = {
  contacts: {
    items: [],
  },
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [...state.contacts.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;

// selectors

export const getContactsList = state => state.contactData.contacts.items;
export const getLoaderStatus = state => state.contactData.isLoading;
export const getError = state => state.contactData.error;

export const getFilterContacts = state => {
  const contacts = getContactsList(state);
  const filter = getContactsFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
};
