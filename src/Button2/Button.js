import React from 'react';
import styles from './Button.css';
console.log('styles', styles);

export const ButtonWithCM = ({ children }) => {
  return (
      <button className={styles.Button}>
        {children}
      </button>
  );
}


