import { Link } from "gatsby"
import React from "react"

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
