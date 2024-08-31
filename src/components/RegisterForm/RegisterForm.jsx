import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
        setErrorMessage('');
      })
      .catch(err => {
        // Afișează mesajul de eroare specific
        setErrorMessage(err || 'An unknown error occurred.');
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Register
        </button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
