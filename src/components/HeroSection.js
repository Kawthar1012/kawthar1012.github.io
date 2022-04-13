import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';


function HeroSection(props) {

  let content = {
    English: {
      title: "Welcome",
      title2: "My name is Kawthar, I am a full-stack developer who recently graduated from a Master's in Computer Science.\n"+
      "Here you will find information about my ongoing and past projects.",
      info: "FIND MORE INFORMATION"
    },
    French: {
      title: "Bienvenue",
      title2: "Je m'appelle Kawthar, je suis une dévelopeuse full-stack ayant obtenu son diplôme de Master en Informatique il y'a un an.\n"+
      "Ici, vous trouverez plus d'informations sur mes projets personnels.",
      info: "EN SAVOIR PLUS"
    }
  };
  
  props.language === "French"
    ? (content = content.French)
    : (content = content.English);


  return (
    <div className='hero-container'>
      <h1>{content.title}</h1>
      <p>{content.title2}</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='/projects'>
        {content.info}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;