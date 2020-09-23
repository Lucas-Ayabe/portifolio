import React from "react"
import "../styles/MenuToggler.css"

const MenuToggler = ({ onClick, className, isActive, ...props }) => {
  const classAttribute = `menu-toggler ${
    isActive ? "is-active" : ""
  } ${className}`

  return (
    <button className={classAttribute} {...props} onClick={onClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  )
}

export default MenuToggler
