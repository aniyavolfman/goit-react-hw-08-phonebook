import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import css from './navigation.module.css';

export function Navigation() {

  const isLoggedIn = useSelector(selectToken);

  return (
    <nav className={css.navigation}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.contacts}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
