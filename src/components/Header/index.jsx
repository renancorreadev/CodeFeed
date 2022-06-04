import styles from './Header.module.css';

import logo from '../../assets/images/logo.svg';

export function Header() {


  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
     </header>
  )
}