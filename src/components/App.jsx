import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/register" element={<LazyRegisterPage />} />
          <Route path="/login" element={<LazyLoginPage />} />
          {/* <Route path="/contacts" element={<LazyContactsPage />} /> */}
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
              <div>
                Sorry, page not found. <Link to="/">Go home</Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
