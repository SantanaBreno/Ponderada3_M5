import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: block;
    margin-top: 5px;
`


function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [isFamily, setIsFamily] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    addContact({ name, phone, isFamily });
    setName('');
    setPhone('');
    setIsFamily(false);
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label htmlFor="familia">É familia?</label>
      <select
        id="familia"
        name="familia"
        value={isFamily}
        onChange={(e) => setIsFamily(e.target.value === 'true')}
        required
      >
        <option value={true}>Sim</option>
        <option value={false}>Não</option>
      </select>
      <button type="submit">Add Contact</button>
    </form>
    </Container>
  );
}

export default ContactForm;