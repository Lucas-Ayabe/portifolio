import React from "react"
import "../styles/grid.css"

const Grid = props => {
  const { reverse, className, ...attrs } = props

  return (
    <div className={`grid ${reverse ? "is-reverse" : ""}`} {...attrs}>
      {props.children}
    </div>
  )
}

export default Grid
