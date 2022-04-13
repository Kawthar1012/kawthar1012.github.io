import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';


function HeroSection(props) {

  let content = {
    English: {
      title: "Welcome to the Vattholma Restaurant!",
      title2: "Want to know more?",
      info: "FIND MORE INFORMATION"
    },
    French: {
      title: "Bienvenue au restaurant Vattholma !",
      title2: "Vous avez des questions ?",
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
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='/values'>
        {content.info}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;