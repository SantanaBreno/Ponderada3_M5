import React from 'react';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.nome} - {contact.phone} - {contact.familia ? 'Familia' : 'Amigo'}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;