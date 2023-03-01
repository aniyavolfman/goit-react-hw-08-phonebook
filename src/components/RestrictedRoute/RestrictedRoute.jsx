import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export default function RestrictedRoute({ redirectTo, component }) {
  const isLoggedin = useSelector(selectToken);
  return isLoggedin ? <Navigate to={redirectTo} /> : component;
}
