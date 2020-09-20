import React from "react"
import "../styles/Menu.css"

export default ({ children }) => {
    const links = children.length === undefined ? [children] : children

    return (
        <nav className="menu">
            <ul className="list">
                {links.map((link, index) => (
                    <li key={index} className="item">
                        {link}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
