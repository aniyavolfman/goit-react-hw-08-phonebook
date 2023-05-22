import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, StarIcon, ViewOffIcon } from '@chakra-ui/icons';

import * as authOperations from '../../redux/auth/authOperations';
import css from './RegisterForm.module.scss';

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
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

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
            placeholder="Enter your name"
            _placeholder={{ opacity: 1, color: '#00b894' }}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            color="#6c5ce7"
            borderColor="#6c5ce7"
            _hover={{ borderColor: '#81ecec' }}
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
            placeholder="Enter your email"
            _placeholder={{ opacity: 1, color: '#00b894' }}
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            color="#6c5ce7"
            borderColor="#6c5ce7"
            _hover={{ borderColor: '#81ecec' }}
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
            placeholder="Enter your password"
            _placeholder={{ opacity: 1, color: '#00b894' }}
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            color="#6c5ce7"
            borderColor="#6c5ce7"
            _hover={{ borderColor: '#81ecec' }}
            required
          />
        </InputGroup>
      </label>
      <div className={css.div}>
        <Button type="submit" colorScheme="purple" className={css.button}>
          Register
        </Button>
      </div>
    </form>
  );
}
