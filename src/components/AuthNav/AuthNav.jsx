import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/login" className={css.navigation}>
        Login
      </NavLink>
      <NavLink to="/register" className={css.navigation}>
        Register
      </NavLink>
    </>
  );
}
