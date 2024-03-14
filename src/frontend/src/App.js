import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Container } from './style';
import axios from 'axios';


// const backendUrl = 'http://localhost:5000';

const backendUrl = process.env.REACT_APP_API_URL;

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/contacts`);
      const data = response.data;
      console.log(data);
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await axios.post(`${backendUrl}/contacts`, contact);
      console.log(response);
      const data = response.data;
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