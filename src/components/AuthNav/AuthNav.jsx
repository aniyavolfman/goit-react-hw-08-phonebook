import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

export default function AuthNav() {
  return (
    <>
      <div className={css.div}>
        <NavLink to="/login" className={css.navigation}>
          Login
        </NavLink>
        <NavLink to="/register" className={css.navigation}>
          Register
        </NavLink>
      </div>
    </>
  );
}
