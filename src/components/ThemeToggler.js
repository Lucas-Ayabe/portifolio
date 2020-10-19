import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "../styles/ThemeToggler.css"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const ThemeToggler = ({ onChange, state }) => {
  return (
    <button
      class="theme-toggler [ button -fab ]"
      onClick={() => onChange(theme => !theme)}
    >
      {state && <FontAwesomeIcon size="2x" icon={faMoon} />}
      {!state && <FontAwesomeIcon size="2x" icon={faSun} />}
    </button>
  )
}

export default ThemeToggler
