import React from "react"

import "../styles/Card.css"

export const Card = props => {
  return <div className="card">{props.children}</div>
}
