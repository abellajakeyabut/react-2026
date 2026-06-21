import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });

  function handleInput(e) {
    const target = e.target.id;
    const value = e.target.value;
    const name = e.target.id;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }else{
      setPassword(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = { name, email ,email};
    console.log(user);
  }

  return (
    <form    onSubmit={handleSubmit}>
      <label    htmlFor="name">Name:</label>
      <input    type="text" id="name" value={name} onChange={handleInput}    />
      <br       />
      <label    htmlFor="email">Email:</label>
      <input    type="email" id="email" value={email} onChange={handleInput}    />
      <br       />
      <label    htmlFor="password">Password:</label>
      <input    type="password" id="password" value={password} onChange={handleInput}    />
      <br       />
      <button    type="submit">Submit</button>
    </form>
  );
}
export {ContactForm}