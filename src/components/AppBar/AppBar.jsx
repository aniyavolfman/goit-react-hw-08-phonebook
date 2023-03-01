import React from 'react'
import { useSelector } from 'react-redux'
import AuthNav from 'components/AuthNav/AuthNav'
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { selectToken } from 'redux/auth/authSelectors';

export function AppBar() {

  const isLoggedIn = useSelector(selectToken);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
}
