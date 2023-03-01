import React from 'react';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const LazyContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage')
);
const LazyHomePage = lazy(() =>
  import('../pages/HomePage/HomePage')
);
const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const LazyRegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/register" element={<LazyRegisterPage />} />
          <Route path="/login" element={<LazyLoginPage />} />
          <Route path='/contacts' element={<LazyContactsPage />} />
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
