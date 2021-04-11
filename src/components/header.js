import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import acmeLogo from "../images/acme-logo.png"

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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="pt-5 col-start-1 col-end-3 border-b-2 border-solid border-gray-600 flex flex-row justify-start pr-80 ">
      <img src={acmeLogo} alt="Acme Logo" />
      <nav className="pt-4 mb-2 flex flex-row justify-end min-w-full">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
