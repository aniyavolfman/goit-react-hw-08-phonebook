import React from 'react'
import { useSelector } from 'react-redux'
import AuthNav from 'components/AuthNav/AuthNav'
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { selectToken } from 'redux/auth/authSelectors';

import css from './AppBar.module.scss';

export function AppBar() {

  const isLoggedIn = useSelector(selectToken);
  return (
    <div className={css.divHeader}>
      <Navigation />
      <div className={css.phone}></div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
