import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {EmailIcon, StarIcon, ViewOffIcon } from '@chakra-ui/icons';

import * as authOperations from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<StarIcon color="#6c5ce7" />}
          />
          <Input
            variant="filled"
            placeholder="Enter your name"
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </InputGroup>
      </label>
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
        Register
      </Button>
    </form>
  );
}
