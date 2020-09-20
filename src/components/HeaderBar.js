import React from "react"
import "../styles/HeaderBar.css"
import { Link } from "gatsby"
import Container from "./Container"

export default ({ children }) => {
  return (
    <header className="header-bar">
      <Container>
        <Link to="/" className="brand">
          &lt;Lucas.Ayabe/&gt;
        </Link>

        {children}
      </Container>
    </header>
  )
}
