import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import * as contactsAPI from 'services/contacts-api';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <p> Hello, {name}</p>
      <button type="button" onClick={() => dispatch(contactsAPI.logout)}>
        Logout
      </button>
    </div>
  );
}

