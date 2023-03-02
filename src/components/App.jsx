import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import { selectFetchingCurrentUser } from 'redux/auth/authSelectors';
import css from './App.module.css';

const LazyContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage')
);
const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const LazyRegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyHomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LazyRegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LazyLoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyContactsPage />}
                />
              }
            />
            <Route
              path="*"
              element={
                <div className={css.information}>
                  Sorry, page not found.{' '}
                  <span className={css.accent}>
                    <Link to="/">Go home</Link>
                  </span>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}
