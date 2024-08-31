import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import LogoutButton from 'components/LogoutButton/LogoutButton';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Verifică dacă utilizatorul este autentificat

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navTitle}>
        Phonebook
      </Link>
      <div>
        <Link to="/register" className={styles.navLink}>
          Register
        </Link>
        <Link to="/login" className={styles.navLink}>
          Login
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/contacts" className={styles.navLink}>
              Contacts
            </Link>
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
