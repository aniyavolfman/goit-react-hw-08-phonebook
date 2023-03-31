import React from 'react'
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import { Container } from 'components/Container/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm'

export default function RegisterPage() {
  const error = useSelector(selectError);
  return (
    <Container>
      {error !== null && <p>Ooops, smth is wrong... Message: '{error}'</p>}
      <RegisterForm />
    </Container>
  )
}
