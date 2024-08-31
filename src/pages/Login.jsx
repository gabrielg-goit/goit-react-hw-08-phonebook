// src/pages/Login/Login.jsx

import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import styles from './styles.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
