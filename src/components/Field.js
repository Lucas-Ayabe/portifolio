import React from "react"
import "../styles/Field.css"
import Stack from "./Stack"

const Field = ({ children, identity, type, placeholder }) => {
  return (
    <div className="field">
      <Stack flow=".5em">
        <label htmlFor={identity}>{children || identity}</label>

        <input
          className="input"
          type={type}
          name={identity}
          id={identity}
          placeholder={placeholder}
        />
      </Stack>
    </div>
  )
}

export default Field
