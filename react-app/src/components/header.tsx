import React from "react";
import cyslogo from "../assets/cys-logo.png"
import BasicMenu from "./BasicMenu";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={cyslogo} alt="" />
      </a>
      <BasicMenu />
    </header>
  );
}

export default Header;