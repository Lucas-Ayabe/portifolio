import React, { useState, useEffect } from "react"
import HeaderBar from "./HeaderBar"
import Container from "./Container"
import Menu from "./Menu"
import MenuLink from "./MenuLink"
import MenuToggler from "./MenuToggler"
import Footer from "./Footer"
import ThemeToggler from "./ThemeToggler"

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuFloating, setIsMenuFloating] = useState(false)
  const [hasDarkTheme, setHasDarkTheme] = useState(false)

  const handleScroll = ({ target: { scrollTop } }) => {
    setScrollY(scrollTop)
    setIsMenuFloating(scrollY > 10)
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setHasDarkTheme(true)
    }
  }, [])

  return (
    <div
      id="layout"
      className={`${hasDarkTheme ? "dark-theme" : ""}`}
      onScroll={handleScroll}
    >
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

      <ThemeToggler state={hasDarkTheme} onChange={setHasDarkTheme} />

      <Footer />
    </div>
  )
}
