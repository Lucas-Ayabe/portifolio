import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeaderBar from "./HeaderBar"
import Container from "./Container"
import Menu from "./Menu"
import MenuLink from "./MenuLink"

export default function Layout({ children }) {
  return (
    <div>
      <HeaderBar>
        <Menu>
          <MenuLink to="/posts">Posts</MenuLink>
          <MenuLink to="/">Contato</MenuLink>
        </Menu>
      </HeaderBar>

      <Container className="section">{children}</Container>
    </div>
  )
}
