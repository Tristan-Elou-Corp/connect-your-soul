import React from "react";
import cyslogo from "../assets/cys-logo.png"

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <a href="/">
          <img src={cyslogo} alt="logo" style={{ width: "40%", marginTop: 50 }} />
        </a>
      </div>
      <div className="footer__legal">
        <a href="/mentions-legales" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "Poppins"}}>
            Mentions légales
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer;