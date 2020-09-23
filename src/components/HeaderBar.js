import React from "react"
import "../styles/HeaderBar.css"
import { Link } from "gatsby"
import Container from "./Container"
import Logo from "./Logo"

export default ({ children }) => {
  return (
    <header className="header-bar">
      <Container>
        <Link to="/" className="brand">
          <Logo />
        </Link>

        {children}
      </Container>
    </header>
  )
}
