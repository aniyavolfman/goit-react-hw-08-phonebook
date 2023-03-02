import { AppBar } from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export function Layout() {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
