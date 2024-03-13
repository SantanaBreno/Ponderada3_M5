import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Container } from './style';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await fetch('/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      setContacts([...contacts, data]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className="App">
      <Container>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
      </Container>
    </div>
  );
}

export default App;