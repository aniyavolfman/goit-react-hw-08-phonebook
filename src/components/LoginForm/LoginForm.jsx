import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';

export function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />
      </label>
      <label>
        Password
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
