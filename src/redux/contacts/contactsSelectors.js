import { getContactsFilter } from "redux/filter/filterSelector";

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
