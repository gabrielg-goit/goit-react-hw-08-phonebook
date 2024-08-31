import React from 'react';
import style from './FormButton.module.css';

function SubmitButton() {
  return (
    <button type="submit" className={style.button}>
      Add Contact
    </button>
  );
}

export default SubmitButton;
