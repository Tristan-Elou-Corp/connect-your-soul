import React from "react";
import cyslogo from "../assets/cys-logo.png"
import BasicMenu from "./BasicMenu";

function Header() {
  return (
    <header className="header">
      <img src={cyslogo} alt="" />
      <BasicMenu />
    </header>
  );
}

export default Header;