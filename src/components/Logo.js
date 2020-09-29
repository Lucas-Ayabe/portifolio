import React from "react"
import "../styles/HeaderLogo.css"
import Lucas from "../../static/lucas.jpg"

const Logo = () => {
  return (
    <span className="logo">
      <img
        src={Lucas}
        alt="Uma foto redonda de Lucas Akira, o autor do site."
        className="image"
      />
      <span className="text">
        &lt;L<span className="min-sm-only">ucas</span>.A
        <span className="min-sm-only">yabe</span>/&gt;
      </span>
    </span>
  )
}

export default Logo
