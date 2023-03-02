import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button } from '@chakra-ui/react';
import { selectUserName } from 'redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div>
      <Avatar bg="teal.500" />
      <p>
        Hello, <span className={css.name}>{name}</span>
      </p>
      <Button
        size="xs"
        colorScheme="purple"
        type="button"
        onClick={handleClick}
      >
        Logout
      </Button>
    </div>
  );
}

