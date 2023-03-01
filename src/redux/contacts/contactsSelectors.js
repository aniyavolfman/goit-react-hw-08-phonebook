import { createSelector } from '@reduxjs/toolkit';
import { selectContactsFilter } from 'redux/filter/filterSelector';

export const selectContactsList = state => state.contactData.contacts.items;
export const selectLoaderStatus = state => state.contactData.isLoading;
export const selectError = state => state.contactData.error;

export const selectFilterContacts = createSelector(
  [selectContactsList, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);
