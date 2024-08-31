// src/components/Login/LoginForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {
        // Redirect or perform other actions on successful login
      })
      .catch(error => {
        setErrorMessage(
          error.message || 'You have entered an invalid username or password.'
        );
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Login
      </button>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
