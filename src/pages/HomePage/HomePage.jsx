import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';

export default function HomePage() {
const error = useSelector(selectError);

  return (
    <section>
      {error !== null && <p>Ooops, smth is wrong... Message: '{error}'</p>}
      <h1>Welcome!!!</h1>
    </section>
  );
}
