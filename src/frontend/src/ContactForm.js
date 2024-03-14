import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: block;
    margin-top: 5px;
`


function ContactForm({ addContact }) {
  const [nome, setNome] = useState('');
  const [phone, setPhone] = useState(0);
  const [familia, setIsFamily] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !phone) return;
    addContact({ nome, phone, familia });
    setNome('');
    setPhone('');
    setIsFamily(false);
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
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
        value={familia}
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