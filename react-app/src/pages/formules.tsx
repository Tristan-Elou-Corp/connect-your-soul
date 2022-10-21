import React from "react";
import ImageSwitcher from "../components/ImageSwitcher";
import Header from "../components/header";
import TextBox from "../components/TextBox";
import cyslogo from "../assets/cys-logo.png"
import EmailBox from "../components/EmailBox";

function Formules() {
  return (
    <div className="formules-wrapper">
      <Header />
      <div className="formules-wrapper__imageSwitcher">
        <ImageSwitcher />
      </div>
      <div>
        <TextBox img="none" title="En individuel" text="J’accompagne les individus en recherche de leur découverte de leur identité vraie par le biais d’un formation sur-mesure, faisant appel à l’ouverture de soi." />
        <TextBox img="none" title="Pour votre entreprise" text="Corrélez la réalité de votre entreprise avec votre leadership et vos valeurs. Contactez-moi pour que nous discutions ensemble de votre vision, de vos objectifs, afin que nous définissions ensemble vos besoins et la meilleure approche à apporter." />
        <TextBox img="none" title="Brand purpose" text="Faites rayonner les bénéfices fonctionnels, émotionnels et sociétaux de votre « marque », grâce à mon accompagnement sur-mesure." />
        <TextBox img="none" title="Organisme de formation agrée" text="Mon entreprise Connect Your Soul ® est agréée auprès des organismes Datadoc, CPF et Qualiopi." />
      </div>
      <div>
        <EmailBox />
        <section className="formules-wrapper__footer">
          <div className="formules-wrapper__footer__logo">
            <a href="/">
              <img src={cyslogo} alt="logo" />
            </a>
          </div>
          <div className="formules-wrapper__footer__legal">
            <a href="/mentions-legales" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: "Poppins"}}>
                Mentions légales
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Formules;