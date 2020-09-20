import React from "react"
import "../styles/Menu.css"
import { Link } from "gatsby"

export default props => {
    return (
        <Link {...props} className="link">
            {props.children}
        </Link>
    )
}
