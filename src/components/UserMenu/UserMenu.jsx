import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div>
      <p> Hello, {name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

