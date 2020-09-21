import React from "react"
import "../styles/grid.css"

const GridColumn = props => {
  const { col, className, ...attrs } = props

  return (
    <div className={`column ${col || ""} ${className}`} {...attrs}>
      {props.children}
    </div>
  )
}

export default GridColumn
