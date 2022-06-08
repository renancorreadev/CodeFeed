import React from "react";

import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
    </header>
  );
}
