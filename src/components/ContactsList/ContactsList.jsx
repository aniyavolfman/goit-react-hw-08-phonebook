import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { selectFilterContacts } from 'redux/contacts/contactsSelectors';
import css from './ContactsList.module.css'

export function ContactsList() {

  const filteredContacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleDelete = event => {
    dispatch(contactsOperations.deleteContact(event.target.id));
  };
  
  return (
    <List className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onButtonDelete={handleDelete}
          buttonId={id}
        />
      ))}
    </List>
  );
}


