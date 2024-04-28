import React, { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import CreatePhonebookForm from './CreatePhonebookForm/CreatePhonebookForm';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem('contacts');
    return localData && JSON.parse(localData).length > 0
      ? JSON.parse(localData)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  const createNewContact = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Phonebook</h1>
      <CreatePhonebookForm submit={createNewContact} />
      <h2 className={styles.subheading}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
