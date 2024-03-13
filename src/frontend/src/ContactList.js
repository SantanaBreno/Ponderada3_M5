import React from 'react';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} - {contact.phone} - {contact.family ? 'Familia' : 'Amigo'}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;