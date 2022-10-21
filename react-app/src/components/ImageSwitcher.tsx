import React, { useState } from "react";
import happiness from "../assets/happiness.webp";
import intellect from "../assets/intellect.webp";
import potential from "../assets/potential.webp";
import skill from "../assets/skill.webp";
import words from "../assets/words.webp";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  {
    id: 0,
    url: happiness,
  },
  {
    id: 1,
    url: intellect,
  },
  {
    id: 2,
    url: potential,
  },
  {
    id: 3,
    url: skill,
  },
  {
    id: 4,
    url: words,
  },
];

function ImageSwitcher() {

  const [image, setImage] = useState(images[0].url);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < 4) {
      setIndex(index + 1);
      setImage(images[index + 1].url);
    } else {
      setIndex(0);
      setImage(images[0].url);
    }
    console.log(index);
  }

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
      setImage(images[index - 1].url);
    } else {
      setIndex(4);
      setImage(images[4].url);
    }
    console.log(index);
  }

  return (
    <div className="switcher__block" >
      <div>
        <img src={image} alt="img" style={{ width: "100%" }}/>
      </div>
      <div>
        <IconButton aria-label="ArrowBack" onClick={handlePrevious} >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton aria-label="ArrowForward" onClick={handleNext} style={{ float: "right" }} >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ImageSwitcher;