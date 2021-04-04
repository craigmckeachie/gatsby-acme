import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/global.css"
import * as styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
