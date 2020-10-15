import React, { useState } from "react"
import HeaderBar from "./HeaderBar"
import Container from "./Container"
import Menu from "./Menu"
import MenuLink from "./MenuLink"
import MenuToggler from "./MenuToggler"

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuFloating, setIsMenuFloating] = useState(false)

  const handleScroll = ({ target: { scrollTop } }) => {
    setScrollY(scrollTop)
    setIsMenuFloating(scrollY > 10)
  }

  return (
    <div id="layout" onScroll={handleScroll}>
      <HeaderBar floating={isMenuFloating}>
        <MenuToggler
          isActive={isMenuOpen}
          onClick={() => setIsMenuOpen(state => !state)}
        />
        <Menu isOpen={isMenuOpen}>
          <MenuLink to="/posts">Posts</MenuLink>
          <MenuLink to="/contact">Contato</MenuLink>
        </Menu>
      </HeaderBar>

      <Container className="fade section">{children}</Container>
      <footer
        style={{
          background: "#fff",
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          textAlign: "center",
        }}
      >
        <Container className="section">
          Criado e mantido por Lucas Akira Ayabe desde 2020.
        </Container>
      </footer>
    </div>
  )
}
