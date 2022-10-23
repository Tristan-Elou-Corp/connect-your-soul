import React from "react";
import Header from "../components/header";
import EmailBox from "../components/EmailBox";
import cyslogo from "../assets/cys-logo.png"

function MentionsLegale() {
  return (
    <div className="ml-wrapper">
      <Header />
      <h2 className="ml-wrapper__title">
        <span className="ml-wrapper__title__text">
          Mentions légales
        </span>
      </h2>
      <div className="ml-wrapper__content">
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            Conformément à la loi du 21 juin 2004 sur la confiance dans l'économie numérique, nous informons les visiteurs et utilisateurs du site Internet http://connect-your-soul.com/ des éléments suivants :
          </span>
        </p>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <h5 className="ml-wrapper__content__title">
          <span className="ml-wrapper__content__title__content">
            Éditeur
          </span>
        </h5>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            Conformément à la loi du 21 juin 2004 sur la confiance dans l'économie numérique, nous informons les visiteurs et utilisateurs du site Internet http://connect-your-soul.com/ des éléments suivants :
          </span>
        </p>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <h5 className="ml-wrapper__content__title">
          <span className="ml-wrapper__content__title__content">
            Hébergement
          </span>
        </h5>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            Le site est hébergé par :
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            1&1 IONOS SARL
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            7, place de la Gare
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            BP 70109
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            57200 Sarreguemines Cedex
          </span>
        </p>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <h5 className="ml-wrapper__content__title">
          <span className="ml-wrapper__content__title__content">
            Limitation de responsabilité
          </span>
        </h5>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour. Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, http://connect-your-soul.com/ ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement. Les photos sont contractuelles. Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau internet ne sauraient engager la responsabilité de http://connect-your-soul.com/
          </span>
        </p>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <h5 className="ml-wrapper__content__title">
          <span className="ml-wrapper__content__title__content">
            Propriété intellectuelle
          </span>
        </h5>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les représentations iconographiques et photographiques. La reproduction, adaptation et/ou traduction de tout ou partie de ce site sur un support quel qu’il soit, est formellement interdite sauf autorisation expresse du Directeur de la publication.
          </span>
        </p>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <h5 className="ml-wrapper__content__title">
          <span className="ml-wrapper__content__title__content">
            RESPECT DE LA LOI INFORMATIQUE ET LIBERTÉS
          </span>
        </h5>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
        <p className="ml-wrapper__content__text1">
          <span className="ml-wrapper__content__text__paragraph">
            Conformément à la loi Informatique et Libertés en date du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification et de suppression concernant les données qui vous concernent. Vous pouvez exercer ce droit en nous contactant.
          </span>
        </p>
        <p className="ml-wrapper__content__gap">
          <span className="ml-wrapper__content__gap__text">
            <br />
          </span>
        </p>
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
  )
}

export default MentionsLegale;