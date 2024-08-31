// src/pages/Register/Register.jsx

import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Register() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;
