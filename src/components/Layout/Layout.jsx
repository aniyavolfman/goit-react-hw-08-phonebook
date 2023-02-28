import { AppBar } from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>
       <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
