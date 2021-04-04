import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/react"

const NavLink = props => (
  <Link
    css={{
      marginLeft: "5px",
      marginRight: "5px",
      padding: "10px",
      color: "#4b5563",
      textDecoration: "none",
      fontSize: "1.25rem",
      "&:hover": {
        color: "#1f2937",
        border: "1px solid #1f2937",
      },
    }}
    {...props}
  />
)

export default function Header() {
  return (
    <header
      css={{
        paddingTop: "20px",
        paddingBottom: "20px",
        borderBottom: "1px solid #4b5563",
      }}
    >
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
