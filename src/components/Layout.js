import React, { useState } from "react"
import HeaderBar from "./HeaderBar"
import Container from "./Container"
import Menu from "./Menu"
import MenuLink from "./MenuLink"
import MenuToggler from "./MenuToggler"

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <HeaderBar>
        <MenuToggler
          isActive={isMenuOpen}
          onClick={() => setIsMenuOpen(state => !state)}
        />
        <Menu isOpen={isMenuOpen}>
          <MenuLink to="/posts">Posts</MenuLink>
          <MenuLink to="/">Contato</MenuLink>
        </Menu>
      </HeaderBar>

      <Container id="content" className="content section">
        {children}
      </Container>
    </div>
  )
}
