import React from "react";
import Header from "../components/header";
import "../scss/home.scss";
import oiseaucage from "../assets/oiseau-cage.webp";

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="citation-wrapper">
        <h2 className="citation-1">
          Un accompagnement personnel,
        </h2>
        <h2 className="citation-2">
          intégratif et holistique
        </h2>
      </div>
      <img src={oiseaucage} alt="oiseaucage" className="oiseaucage"/>
      <p className="citation-3-wrapper">
        <span className="citation-3">
          J’ai tenté de faire comme ce colibri : sortir de cette cage pour comprendre ce qu’est la liberté pour être en paix, vivre en paix. Mais je me suis heurtée à de nombreux obstacles qui me ramenaient à ma réalité : nous ne pouvons pas vivre déconnectés de notre environnement… Alors comment exprimer sa singularité et sa liberté dans ce monde régi par des codes et enfermé dans un cadre ?
        </span>
      </p>
      <p>
        <span className="title-1">
          Ma vision du changement de paradigmes pour demain
        </span>
      </p>
      <p className="citation-4-1-wrapper">
        <span className="citation-4-1">
          Par mes formations intégratives « sur mesure » et mon coaching holistique, je suis dans le partage de ce que la vie vous/nous apprend. Et je ressens plus que jamais que nous devons mettre des mots aux maux de ce monde et panser notre intérieur pour vivre pleinement notre destinée professionnelle et personnelle. #calibrateyourheart
        </span>
      </p>
      <p className="citation-4-2-wrapper">
        <span className="citation-4-2">
        La vie, celle de « madame ou monsieur tout le monde » doit être calibrée en fonction de ce que l’on est au fond de soi. Vivre ne doit pas être de subir ou réagir mais plutôt de s’accepter soi-même d’abord, accepter les autres puis accepter le monde. Nous vivons dans un monde de reproches… Nous vivons du reproche, par le reproche et en fonction des reproches de la perfection et j’irai plus loin de la « perfectude »… C’est en fait une société mondiale basée sur le meilleur qui régit nos vies., cette même société ne se rend pas compte qu’elle nous nivelle vers le bas tout en pensant nous améliorer et nous élever vers le rang des meilleurs. 
        </span>
      </p>
      <p className="citation-4-3-wrapper">
        <span className="citation-4-3">
        La comparaison et la compétition (deux mécanismes clés de l’Ego) semblent faire du bien à cet humain en nous qui a besoin d’être challengé, boosté, et valorisé pour ses efforts; Et si nous prenions l’équation à l’envers: cet même humain fait des efforts car il ne serait ni comparé ni compétiteur pour être valorisé, boosté et challengé.
        </span>
      </p>
      <p className="citation-4-4-wrapper">
        <span className="citation-4-4">
        D’où ce reproche inconscient de l’humanité…
        </span>
      </p>
      <ul className="list">
        <li>
          <span>
            Qui es-tu aux yeux du monde pour être reconnu?
          </span>
        </li>
        <li>
          <span>
            Qu’as-tu fait comme exploit ou relevé comme challenge?
          </span>
        </li>
        <li>
          <span>
            As-tu marqué les esprits pour être valorisé?
          </span>
        </li>
        <li>
          <span>
            As-tu fait preuve de courage pour être boosté?
          </span>
        </li>
        <li>
          <span>
            N’as-tu aucun leitmotiv qui te motive pour avancer?
          </span>
        </li>
      </ul>
      <p className="citation-5-wrapper">
        <span className="citation-5">
          Tant de reproches tournés positivement qui hantent nos vies depuis notre plus jeune âge avec nos parents, à l’école, au travail, dans un couple, dans les médias… 
        </span>
      </p>
      <p className="citation-6-wrapper">
        <span className="citation-6">
        Tout notre questionnement repose sur le sens même du mot « existence » :
        </span>
      </p>
      <div className="citation-7-div-wrapper">
        <h2 className="citation-7-title-wrapper">
          <span className="citation-7-title">
            EST-CE QUE J’EXISTE POUR OUBLIER QUI JE SUIS, OU BIEN, TOUT SIMPLEMENT J’EXISTE PARCE QUE JE SUIS ? 
          </span>
        </h2>
        <p className="citation-7-1-wrapper">
          <span className="citation-7-1">
            La liberté n’est vraie que lorsque vous avez la paix au fond de votre cœur comme un moteur puissant qui accepte les obstacles et l’adversité de la vie.
          </span>
        </p>
        <p className="citation-7-2-wrapper">
          <span className="citation-7-2">
            Si vous pensez détenir la vérité, les connaissances, la sagesse ou la puissance ; si vous manquez de reconnaissance, notoriété ou d’influence… Alors mon coaching est pour vous, je vous accompagnerai dans votre quotidien, dans le partage et la
          </span>
        </p>
        <p className="citation-7-3-wrapper">
          <span className="citation-7-3">
            bienveillance pour transcender votre For intérieur afin qu’il rayonne vers le For extérieur.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;