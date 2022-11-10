import React from "react";
import ImageSwitcher from "../components/ImageSwitcher";

import Header from "../components/header";
import Footer from "../components/footer";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Formules() {
  

  return (
    <React.Fragment>
      <Header />
      <div className="formules-wrapper">
        <div className="formules-wrapper__imageSwitcher">
          <ImageSwitcher />
          
        </div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            justifyContent: 'center',
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 300,
            },
          }}
        >
          <Paper elevation={3} >
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "21px", color: "#1D4851", fontFamily: "Poppins" }}>
                En individuel
              </span>
            </h3>
            <p style={{ textAlign: "center" }}>
              <span style={{ color: "#373737", fontSize: "16px", fontFamily: "Noto Sans", fontWeight: "400", lineHeight: "2" }}>
                J’accompagne les individus en recherche de leur découverte de leur identité vraie par le biais d’un formation sur-mesure, faisant appel à l’ouverture de soi.
              </span>
            </p>
          </Paper>
          <Paper elevation={3} >
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "21px", color: "#1D4851", fontFamily: "Poppins" }}>
                Pour votre entreprise
              </span>
            </h3>
            <p style={{ textAlign: "center" }}>
              <span style={{ color: "#373737", fontSize: "16px", fontFamily: "Noto Sans", fontWeight: "400", lineHeight: "2" }}>
                Corrélez la réalité de votre entreprise avec votre leadership et vos valeurs. Contactez-moi pour que nous discutions ensemble de votre vision, de vos objectifs, afin que nous définissions ensemble vos besoins et la meilleure approche à apporter.
              </span>
            </p>
          </Paper>
          <Paper elevation={3} >
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "21px", color: "#1D4851", fontFamily: "Poppins" }}>
                Brand Purpose
              </span>
            </h3>
            <p style={{ textAlign: "center" }}>
              <span style={{ color: "#373737", fontSize: "16px", fontFamily: "Noto Sans", fontWeight: "400", lineHeight: "2" }}>
                Faites rayonner les bénéfices fonctionnels, émotionnels et sociétaux de votre « marque », grâce à mon accompagnement sur-mesure.
              </span>
            </p>
          </Paper>
          <Paper elevation={3} >
            <h3 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "21px", color: "#1D4851", fontFamily: "Poppins" }}>
                Organisme de formation agréé
              </span>
            </h3>
            <p style={{ textAlign: "center" }}>
              <span style={{ color: "#373737", fontSize: "16px", fontFamily: "Noto Sans", fontWeight: "400", lineHeight: "2" }}>
                Mon entreprise Connect Your Soul® est agréée auprès des organismes Datadoc, CPF et Qualiopi.
              </span>
            </p>
          </Paper>
        </Box>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Formules;