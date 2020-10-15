import React from "react"
import "../styles/Field.css"
import Stack from "./Stack"

const TextField = ({ children, identity, placeholder }) => {
  return (
    <div className="field">
      <Stack flow=".5em">
        <label htmlFor={identity}>{children || identity}</label>

        <textarea
          name={identity}
          id={identity}
          rows="3"
          className="input"
          placeholder={placeholder}
        ></textarea>
      </Stack>
    </div>
  )
}

export default TextField
