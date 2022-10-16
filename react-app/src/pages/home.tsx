import React from "react";
import Header from "../components/header";
import oiseaucage from "../assets/oiseau-cage.webp";
import puzzlepiece from "../assets/puzzlepiece.png"
import tete from "../assets/tete.png"
import key from "../assets/key.png"
import key2 from "../assets/key2.webp"
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import journey from "../assets/letsstartyourjourney.webp";
import stairs from "../assets/stairs.webp";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d4851',
    },
  },
});

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="home-wrapper__citation-wrapper">
        <h2 className="home-wrapper__citation-wrapper__citation">
          Un accompagnement personnel,
        </h2>
        <h2 className="home-wrapper__citation-wrapper__citation">
          intégratif et holistique
        </h2>
      </div>
      <img src={oiseaucage} alt="oiseaucage" className="home-wrapper__oiseaucage"/>
      <p className="home-wrapper__citation">
        <span className="home-wrapper__citation__text">
          J’ai tenté de faire comme ce colibri : sortir de cette cage pour comprendre ce qu’est la liberté pour être en paix, vivre en paix. Mais je me suis heurtée à de nombreux obstacles qui me ramenaient à ma réalité : nous ne pouvons pas vivre déconnectés de notre environnement… Alors comment exprimer sa singularité et sa liberté dans ce monde régi par des codes et enfermé dans un cadre ?
        </span>
      </p>
      <p className="home-wrapper__citation_title">
        <span className="home-wrapper__citation_title__title">
          Ma vision du changement de paradigmes pour demain
        </span>
      </p>
      <p className="home-wrapper__citation--normal">
        <span className="home-wrapper__citation--normal__text">
          Par mes formations intégratives « sur mesure » et mon coaching holistique, je suis dans le partage de ce que la vie vous/nous apprend. Et je ressens plus que jamais que nous devons mettre des mots aux maux de ce monde et panser notre intérieur pour vivre pleinement notre destinée professionnelle et personnelle. #calibrateyourheart
        </span>
      </p>
      <p className="home-wrapper__citation--normal">
        <span className="home-wrapper__citation--normal__text">
        La vie, celle de « madame ou monsieur tout le monde » doit être calibrée en fonction de ce que l’on est au fond de soi. Vivre ne doit pas être de subir ou réagir mais plutôt de s’accepter soi-même d’abord, accepter les autres puis accepter le monde. Nous vivons dans un monde de reproches… Nous vivons du reproche, par le reproche et en fonction des reproches de la perfection et j’irai plus loin de la « perfectude »… C’est en fait une société mondiale basée sur le meilleur qui régit nos vies., cette même société ne se rend pas compte qu’elle nous nivelle vers le bas tout en pensant nous améliorer et nous élever vers le rang des meilleurs. 
        </span>
      </p>
      <p className="home-wrapper__citation--normal">
        <span className="home-wrapper__citation--normal__text">
        La comparaison et la compétition (deux mécanismes clés de l’Ego) semblent faire du bien à cet humain en nous qui a besoin d’être challengé, boosté, et valorisé pour ses efforts; Et si nous prenions l’équation à l’envers: cet même humain fait des efforts car il ne serait ni comparé ni compétiteur pour être valorisé, boosté et challengé.
        </span>
      </p>
      <p className="home-wrapper__citation--normal">
        <span className="home-wrapper__citation--normal__text">
        D’où ce reproche inconscient de l’humanité…
        </span>
      </p>
      <ul className="home-wrapper__list">
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
      <p className="home-wrapper__citation--normal">
        <span className="home-wrapper__citation--normal__text">
          Tant de reproches tournés positivement qui hantent nos vies depuis notre plus jeune âge avec nos parents, à l’école, au travail, dans un couple, dans les médias… 
        </span>
      </p>
      <p className="home-wrapper__citation--normal">
        <span className="home-wrapper__citation--normal__text">
        Tout notre questionnement repose sur le sens même du mot « existence » :
        </span>
      </p>
      <div className="home-wrapper__citation--background">
        <h2 className="home-wrapper__citation--background__title_block">
          <span className="home-wrapper__citation--background__title_block__title">
            EST-CE QUE J’EXISTE POUR OUBLIER QUI JE SUIS, OU BIEN, TOUT SIMPLEMENT J’EXISTE PARCE QUE JE SUIS ? 
          </span>
        </h2>
        <p className="home-wrapper__citation--background__citation">
          <span className="home-wrapper__citation--background__citation__text">
            La liberté n’est vraie que lorsque vous avez la paix au fond de votre cœur comme un moteur puissant qui accepte les obstacles et l’adversité de la vie.
          </span>
        </p>
        <p className="home-wrapper__citation--background__citation">
          <span className="home-wrapper__citation--background__citation__text">
            Si vous pensez détenir la vérité, les connaissances, la sagesse ou la puissance ; si vous manquez de reconnaissance, notoriété ou d’influence… Alors mon coaching est pour vous, je vous accompagnerai dans votre quotidien, dans le partage et la
          </span>
        </p>
        <p className="home-wrapper__citation--background__citation">
          <span className="home-wrapper__citation--background__citation__text">
            bienveillance pour transcender votre For intérieur afin qu’il rayonne vers le For extérieur.
          </span>
        </p>
      </div>
      <section className="home-wrapper__square">
        <div className="home-wrapper__square__block">
          <div className="home-wrapper__square__block__content">
            <img src={puzzlepiece} alt="puzzlepiece" />
            <h3 className="home-wrapper__square__block__content__text">
              <span className="home-wrapper__square__block__content__text__title">
                Adaptabilité
              </span>
            </h3>
            <p className="home-wrapper__square__block__content__paragraph">
              <span className="home-wrapper__square__block__content__paragraph__text">
                Services uniquement sur-mesure en fonction de la personne, je vous offre un accompagnement entièrement personnalisé.
              </span>
            </p>
          </div>
        </div>
        <div className="home-wrapper__square">
          <div className="home-wrapper__square__block">
            <img src={tete} alt="tete" />
            <h3 className="home-wrapper__square__block__content__text">
              <span className="home-wrapper__square__block__content__text__title">
                Approche Holistique
              </span>
            </h3>
            <p className="home-wrapper__square__block__content__paragraph">
              <span className="home-wrapper__square__block__content__paragraph__text">
                Combinaison de tous vos besoins, mon approche est à la fois professionnelle et personnelle.
              </span>
            </p>
          </div>
        </div>
        <div className="home-wrapper__square">
          <div className="home-wrapper__square__block">
            <img src={key} alt="key" />
            <h3 className="home-wrapper__square__block__content__text">
              <span className="home-wrapper__square__block__content__text__title">
                Approche dynamique
              </span>
            </h3>
            <p className="home-wrapper__square__block__content__paragraph">
              <span className="home-wrapper__square__block__content__paragraph__text">
                Mon approche amène une vraie profondeur et une vision 360 de la situation, elle prend en compte l'environnement dans lequel nous sommes.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="home-wrapper__bottom">
        <p className="home-wrapper__bottom__citation">
          <span className="home-wrapper__bottom__citation__text">
            Je vous accompagne avec une grande écoute pour avancer sur votre chemin.
          </span>
        </p>
        <p className="home-wrapper__bottom__citation">
          <span className="home-wrapper__bottom__citation__text">
          Le hasard n'éxiste pas... notre rencontre est forcément programmée...
          </span>
        </p>
        <div className="bottom-part">
          <div className="career-img-wrapper">
            <a href="/formules" className="career-img-a">
              <img src={key2} alt="career" className="career-img"/>
            </a>
          </div>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={() => window.location.href="/formules"} size="small">Mes formules et Accompagnements</Button>
          </ThemeProvider>
          <div className="journey-img-wraper">
            <a href="/contact" className="journey-img-a">
              <img src={journey} alt="journey" className="journey-img"/>
            </a>
          </div>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={() => window.location.href="/formules"} size="small" >Ils m'ont fait confiance</Button>
          </ThemeProvider>
          <div className="stairs-img-wraper">
            <img src={stairs} alt="stairs" className="stairs-img"/>
          </div>
        </div>
      </section>
  </div>
  );
}

export default Home;