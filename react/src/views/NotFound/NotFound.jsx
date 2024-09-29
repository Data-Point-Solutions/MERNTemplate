import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MetallicButton from '../../components/buttons/MetallicButton';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error 401: Page not Found</h1>
      <p className={styles.message}>The page you requested does not exist.</p>
      <RouterLink to="/">
        <MetallicButton color="red">Return Home</MetallicButton>
      </RouterLink>
    </div>
  );
};

export default NotFound;
