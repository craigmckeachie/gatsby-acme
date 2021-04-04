import React from "react"
import * as styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer>
      <nav className="styles.nav">
        <a href="#" className={`${styles.link} ${styles.first}`}>
          Privacy
        </a>
        <a href="#" className={styles.link}>
          Terms
        </a>
        <a href="#" className={styles.link}>
          Career
        </a>
      </nav>
    </footer>
  )
}
