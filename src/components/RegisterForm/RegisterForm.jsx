import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';

export function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const userMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const handleChange = ({ target: { name, value } }) => {
    userMap[name](value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');

  }


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          required
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
}
