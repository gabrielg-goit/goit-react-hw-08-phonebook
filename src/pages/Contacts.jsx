// src/pages/Contacts.jsx
import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterInput from 'components/FilterInput';
import styles from 'App.module.css';

function Contacts() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <FilterInput />
      <ContactList />
    </div>
  );
}

export default Contacts;
