import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import {EmailIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as authOperations from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = ({ target: { name, value } }) => {
    userMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="#6c5ce7" />}
          />
          <Input
            variant="filled"
            placeholder="Enter your email"
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </InputGroup>
      </label>
      <label>
        Password
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<ViewOffIcon color="#6c5ce7" />}
          />
          <Input
            variant="filled"
            placeholder="Enter your password"
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            required
          />
        </InputGroup>
      </label>
      <Button type="submit" colorScheme="purple" className={css.button}>
        Log In
      </Button>
    </form>
  );
}
