import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { getFilteredContacts } from '../../redux/contacts/contactsSelector';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {isLoading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
