import React from 'react'
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
