import React from "react"

export default props => {
  const { className } = props
  return (
    <div {...props} className={`container ${className || ""}`}>
      {props.children}
    </div>
  )
}
