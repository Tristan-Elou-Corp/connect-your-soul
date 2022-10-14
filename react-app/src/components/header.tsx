import React from "react";
import cyslogo from "../assets/cys-logo.png"
import "../scss/header.scss";
import BasicMenu from "./BasicMenu";

function Header() {
  return (
    <div className="header-div">
      <img src={cyslogo} alt="" />
      <BasicMenu />
    </div>
  );
}

export default Header;