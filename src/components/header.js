import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  color: #4b5563;
  text-decoration: none;
  font-size: 1.25rem;
  &:hover {
    color: #1f2937;
    border: 1px solid #1f2937;
    padding: 10px;
  }
`

const StyledHeader = styled.header`
  border-bottom: 1px solid #4b5563;
  padding-top: 20px;
  padding-bottom: 20px;
`

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink>
      </nav>
    </StyledHeader>
  )
}
