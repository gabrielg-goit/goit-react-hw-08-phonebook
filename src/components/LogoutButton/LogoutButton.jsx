// src/components/LogoutButton/LogoutButton.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operations';
import styles from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
