import React from "react";
import ImageSwitcher from "../components/ImageSwitcher";
import Header from "../components/header";
import Footer from "../components/footer";
import TextBox from "../components/TextBox";

function Formules() {
  return (
    <React.Fragment>
      <Header />
      <div className="formules-wrapper">
        <div className="formules-wrapper__imageSwitcher">
          <ImageSwitcher />
        </div>
        <div className="formules-wrapper__square">
          <TextBox img="none" title="En individuel" text="J’accompagne les individus en recherche de leur découverte de leur identité vraie par le biais d’un formation sur-mesure, faisant appel à l’ouverture de soi." />
          <TextBox img="none" title="Pour votre entreprise" text="Corrélez la réalité de votre entreprise avec votre leadership et vos valeurs. Contactez-moi pour que nous discutions ensemble de votre vision, de vos objectifs, afin que nous définissions ensemble vos besoins et la meilleure approche à apporter." />
          <TextBox img="none" title="Brand purpose" text="Faites rayonner les bénéfices fonctionnels, émotionnels et sociétaux de votre « marque », grâce à mon accompagnement sur-mesure." />
          <TextBox img="none" title="Organisme de formation agrée" text="Mon entreprise Connect Your Soul ® est agréée auprès des organismes Datadoc, CPF et Qualiopi." />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Formules;