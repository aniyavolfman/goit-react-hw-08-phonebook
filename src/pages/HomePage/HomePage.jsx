import React from 'react';
import { useSelector } from 'react-redux';
import { StarIcon } from '@chakra-ui/icons';
import { selectError } from 'redux/auth/authSelectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const error = useSelector(selectError);

  return (
    <section>
      {error !== null && <p>Ooops, smth is wrong... Message: '{error}'</p>}
      <h1 className={css.header}>
        <StarIcon color="#6c5ce7" />
        Welcome!!! <StarIcon color="#6c5ce7" />
      </h1>
    </section>
  );
}
