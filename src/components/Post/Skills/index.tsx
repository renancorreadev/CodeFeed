import React from 'react';

import js from '../../../assets/images/js.svg';
import react from '../../../assets/images/react.svg';
import typescript from '../../../assets/images/typescript.svg';
import vtex from '../../../assets/images/vtex.svg';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.items_1}>
        <img src={react} alt="react" />
        <img src={js} alt="react" />
      </div>
      <div className={styles.items_2}>
        <img src={typescript} alt="react" />
        <img src={vtex} alt="react" />
      </div>
    </div>
  );
}
