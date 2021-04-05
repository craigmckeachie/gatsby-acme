import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="p-10">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
