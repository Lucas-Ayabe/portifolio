import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const Stack = props => {
  const stack = useRef()
  const { className, flow, isRecursive, ...attrs } = props
  const recursiveClass = isRecursive ? "recursive" : ""

  useEffect(() => {
    stack.current.style.setProperty("--vertical-rhythm", flow || "1em")
  }, [flow])

  return (
    <div
      {...attrs}
      ref={stack}
      className={`stack ${recursiveClass} ${className || ""}`}
    >
      {props.children}
    </div>
  )
}

Stack.propTypes = {
  isRecursive: PropTypes.bool,
}

export default Stack
