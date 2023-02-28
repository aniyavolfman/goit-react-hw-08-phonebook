import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { getFilterContacts } from 'redux/contacts/contactsSlice';
import css from './ContactsList.module.css'

export function ContactsList() {

  const filteredContacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleDelete = event => {
    dispatch(contactsOperations.deleteContact(event.target.id));
  };
  
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onButtonDelete={handleDelete}
          buttonId={id}
        />
      ))}
    </ul>
  );
}


