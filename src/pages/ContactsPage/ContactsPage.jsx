import React from 'react';
import { selectLoaderStatus, selectError } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import css from './ContactsPage.module.css';


export default function ContactsPage() {
  const isLoading = useSelector(selectLoaderStatus);
  const error = useSelector(selectError);
  return (
    <Container>
      {error !== null && <p>Ooops, smth is wrong... Message: '{error}'</p>}
      <h1 className={css.mainHeader}>Phonebook</h1>
      <Form />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      <ContactsList />
    </Container>
  );
}
