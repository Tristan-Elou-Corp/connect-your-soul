import React from "react";
import Header from "../components/header";
import "../scss/home.scss";

function Home() {
  return (
    <div>
      <Header />
      <div className="citation-wrapper">
        <h2 className="citation-1">
          Un accompagnement personnel,
        </h2>
        <h2 className="citation-2">
          intégratif et holistique
        </h2>
      </div>
    </div>
  );
}

export default Home;