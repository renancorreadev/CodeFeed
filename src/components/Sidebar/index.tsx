import { PencilLine } from "phosphor-react";
import React from "react";

import { Avatar } from "../Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="cover"
      />

      <div className={styles.profile}>
        <Avatar className={styles.avatar} src="https://github.com/renancorreadev.png" />
        <strong>Marcelo Alexander</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="https://#">
          <PencilLine size="20" />
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  );
}
