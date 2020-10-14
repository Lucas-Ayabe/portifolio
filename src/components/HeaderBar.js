import React from "react"
import "../styles/HeaderBar.css"
import { Link } from "gatsby"
import Container from "./Container"
import Logo from "./Logo"

export default ({ children, floating }) => {
  return (
    <header className={`header-bar ${floating ? "is-floating" : ""}`}>
      <Container>
        <Link to="/" className="brand">
          <Logo />
        </Link>

        {children}
      </Container>
    </header>
  )
}
