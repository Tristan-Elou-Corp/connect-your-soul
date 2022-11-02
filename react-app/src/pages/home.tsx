import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import oiseaucage from "../assets/oiseau-cage.webp";
import puzzlepiece from "../assets/puzzlepiece.png"
import tete from "../assets/tete.png"
import key from "../assets/key.png"
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import journey from "../assets/letsstartyourjourney.webp";
import stairs from "../assets/stairs.webp";
import TextBox from "../components/TextBox";
import EmailIcon from '@mui/icons-material/Email';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d4851',
    },
  },
});

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="home-wrapper">
        <div className="home-wrapper__citation-wrapper">
          <h2 className="home-wrapper__citation-wrapper__citation">
            Un accompagnement personnel, intégratif et holistique
          </h2>
        </div>
        <div className="home-wrapper__citation-image">
          <img src={oiseaucage} alt="oiseaucage" className="home-wrapper__citation-image__oiseaucage"/>
          <p className="home-wrapper__citation-image__citation">
            <span className="home-wrapper__citation-image__citation__text">
              J’ai tenté de faire comme ce colibri : sortir de cette cage pour comprendre ce qu’est la liberté pour être en paix, vivre en paix. Mais je me suis heurtée à de nombreux obstacles qui me ramenaient à ma réalité : nous ne pouvons pas vivre déconnectés de notre environnement… Alors comment exprimer sa singularité et sa liberté dans ce monde régi par des codes et enfermé dans un cadre ?
            </span>
          </p>
        </div>
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
          <TextBox img={puzzlepiece} title="Adaptabilité" text="Services uniquement sur-mesure en fonction de la personne, je vous offre un accompagnement entièrement personnalisé." />
          <TextBox img={tete} title="Approche Holistique" text="Combinaison de tous vos besoins, mon approche est à la fois professionnelle et personnelle." />
          <TextBox img={key} title="Approche Dynamique" text="Mon approche amène une vraie profondeur et une vision 360 de la situation, elle prend en compte l'environnement dans lequel nous sommes." />
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
          <div className="home-wrapper__bottom__formula">
            <div className="home-wrapper__bottom__formula__block">
              <a href="/">
                <img src={stairs} alt="stairs"/>
              </a>
            </div>
            <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" onClick={() => window.location.href="/formules"} size="small">Mes formules et Accompagnements</Button>
            </ThemeProvider>
            <div className="home-wrapper__bottom__formula__block">
              <a href="/contact">
                <img src={journey} alt="journey"/>
              </a>
            </div>
            <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" onClick={() => window.location.href="/formules"} size="small" >Ils m'ont fait confiance</Button>
            </ThemeProvider>
            <div className="home-wrapper__bottom__formula__block">
              <a href="/">
                <img src={stairs} alt="stairs"/>
              </a>
            </div>
          </div>
          <ThemeProvider theme={theme}>
            <Button id="email-button" fullWidth variant="contained" color="primary" onClick={() => window.location.href="/contact"} size="small" >
              <EmailIcon />
              Email
            </Button>
          </ThemeProvider>
        </section>
        <Footer />
    </div>
  </React.Fragment>
  );
}

export default Home;