import React from "react";
import * as styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <nav className={styles.nav}>
        <a className={`${styles.link} ${styles.first}`} href="#">
          Privacy
        </a>
        <a className={styles.link} href="#">
          Terms
        </a>
        <a className={styles.link} href="#">
          Careers
        </a>
        <span> &#169; Acme Inc.</span>
      </nav>
    </div>
  );
}