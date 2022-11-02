import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import journey from "../assets/letsstartyourjourney.webp"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailBox from "../components/EmailBox";

function Contact() {
  return (
    <React.Fragment>
      <Header />
      <div className="contact-wrapper">
        <div className="contact-wrapper__journey__block">
          <a href="/contact">
            <img src={journey} alt="journey"/>
          </a>
        </div>
        <div className="contact-wrapper__text-trust">
          <span className="contact-wrapper__text-trust__span">
            ils ont fait confiance à mon accompagnement personnel
          </span>
        </div>
        <div className="contact-wrapper__accordions-wrapper">
          <div className="contact-wrapper__accordions-wrapper__accordion">
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#1d4851", color: "white" }}
              >
                <Typography fontFamily={"Poppins"}>Transition professionnelle</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily={"Poppins"}>
                  Florence m'a accompagné dans la conduite de ma nouvelle vie professionnelle, pour construire mon projet, pour y mettre de la clarté et de la cohérence. Elle m'a guidé, en s'appuyant sur son expérience, sur mon vécu et sur sa capacité à comprendre mes aspirations profondes. Elle a compris le cadre dirigeant à l'international que j'étais, car elle aussi a travaillé sur plusieurs continents nourrie de ces différentes cultures. Elle a compris mon besoin d'entreprendre dans un domaine en accord avec mes aspirations profondes car elle même est poly-entrepreneuse. Créer et structurer une entreprise, enregistrer sa marque, communiquer, etc.; Florence en connait tous les ficelles. Merci Florence d'avoir été ce co-pilote qui vous guide pour prendre les virages à la bonne vitesse et éviter des sorties de route. Grâce à son côté Yang, l'action est au rendez-vous, et grâce à son côté yin, l'intuition se transcende! Mon changement professionnelle s'est concrétisé en m'offrant la vraie vie à laquelle j'aspirais, avec de la passion mais sans stress; en confiance, tout se met en place grâce au regard bienveillant et généreux de Florence.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#1d4851", color: "white" }}
              >
                <Typography fontFamily={"Poppins"}>Prise de responsabilités</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily={"Poppins"}>
                  Avec son énergie, Florence me pousse toujours à aller plus loin et au bout de mes projets. Cela fait plusieurs mois qu'elle m'accompagne dans le cadre d'un changement de poste où j'ai de plus en plus de responsabilités. Je connais mon métier, mais je doute souvent... Grâce à son écoute et à sa disponibilité, je me sens épaulée à chaque instant. Sa bienveillance m'aide à avoir confiance en moi, en mes projets et ses conseils sont souvent très justes. Avec Florence à mes côtés, je me sens plus forte, sûre de moi et prête à relever des défis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#1d4851", color: "white" }}
              >
                <Typography fontFamily={"Poppins"}>Équilibrer la vie perso et pro</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily={"Poppins"}>
                  Mes échanges avec Florence ont eu l'effet d'un pansement sur des blessures qui étaient à vif...l'étape de la cicatrisation passée, elle est aujourd'hui la main tendue qui me guide vers ma lumière, ma lumière intérieure. Sans jugement, que de la bienveillance.Elle est mon guide,elle me surprend encore aujourd'hui à répondre à certaines de mes questions sans même que j'ai eu besoin de les poser.Une bénédiction.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#1d4851", color: "white" }}
              >
                <Typography fontFamily={"Poppins"}>Gérer la direction de l'info : c'est une vraie vision</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily={"Poppins"}>
                  Florence met sa singularité au service de la nôtre. Elle ne se contente pas d'inculquer des préceptes déjà établis, elle utilise son intuition et ses connaissances pour les adapter à chaque personnalité qu'elle rencontre. Son aide précieuse pour gérer et réorganiser ma rédaction a été indispensable ; sans son soutien, disponibilité et expertise, je n’aurai pas pu mener à bien les transformations drastiques de mes équipes. Je voulais que les choses se passent le plus humainement possible, et Florence à m’aider à ouvrir les yeux sur l’essentiel. Il y a eu la transformation de ma rédaction…Et de moi aussi.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#1d4851", color: "white" }}
              >
                <Typography fontFamily={"Poppins"}>Transcender l'artiste qui est en moi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily={"Poppins"}>
                  Je me suis demandé toute ma vie quel talent je pouvais avoir ? Je n’avais pas confiance en moi, j’avais peur de la réussite, j’avais une paranoïa qui me créait des angoisses, qui m’empêchait de transcender ma créativité… Et j’ai rencontré Florence. Son accompagnement est bien plus qu’un coaching ou même une séance de psy… Elle a su me mettre face à moi-même avec beaucoup de bienveillance. Ses mots ont guéri mes maux et mon art ! Aujourd’hui, je rayonne de ma musique pour moi, pour mes fans et dans le monde entier. 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div>
          <EmailBox />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;