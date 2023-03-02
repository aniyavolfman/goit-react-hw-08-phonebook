import { RegisterForm } from 'components/RegisterForm/RegisterForm'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';

export default function RegisterPage() {
  const error = useSelector(selectError);
  return (
    <>
      {error !== null && <p>Ooops, smth is wrong... Message: '{error}'</p>}
      <RegisterForm />
    </>
  )
}
