import React from "react";
import cyslogo from "../assets/cys-logo.png"
import BasicMenu from "./BasicMenu";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={cyslogo} alt="" />
      </a>
      <div className="header__menu">
        <BasicMenu />
      </div>
      <nav>
        <a id="home" href="/">Accueil</a>
        <a className="formule" href="/formules">Formules</a>
        <a className="contact" href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;