import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { PhoneIcon, EditIcon } from '@chakra-ui/icons';
import css from './Form.module.css';
import { selectContactsList } from 'redux/contacts/contactsSelectors';

export function Form() {
  const contacts = useSelector(selectContactsList);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactMap = {
    name: setName,
    number: setNumber,
  };

  const handleInputChange = ({ target: { name, value } }) => {
    contactMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: name,
      number: number,
    };

    addContact(contact);

    setName('');
    setNumber('');
  };

  const addContact = contact => {
    if (
      contacts.some(
        contactItem =>
          contactItem.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.info(`Oops, ${contact.name} is already in contacts!`);
      return;
    }
    const finalContact = {
      ...contact,
    };

    dispatch(contactsOperations.addContact(finalContact));
  };

  return (
    <form onSubmit={handleSubmit} className={css.formContact}>
      <label>
        <div>Name</div>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EditIcon color="#6c5ce7" />}
          />
          <Input
            variant="filled"
            placeholder="Enter contact name"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputGroup>
      </label>
      <label>
        <div>Number</div>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="#6c5ce7" />}
          />
          <Input
            variant="filled"
            placeholder="Enter contact number"
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputGroup>
      </label>
      <Button type="submit" colorScheme="purple" className={css.buttonSubmit}>
        Add contact
      </Button>
    </form>
  );
}
