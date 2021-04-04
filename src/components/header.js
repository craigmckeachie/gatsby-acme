import { Link } from "gatsby"
import React from "react"

export const NavLink = ({ children, to }) => {
  return (
    <Link
      className="mx-0 p-5 text-gray-600 text-lg hover:text-gray-800 hover:border-2 hover:border-solid hover:border-gray-800"
      to={to}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="pt-5">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
