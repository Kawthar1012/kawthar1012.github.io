import React from 'react';
import '../Card.css';
import video from "../../images/demo.mp4";

function Ants(props) {

  const vidStyle = {
    margin: '2%',
  };

  let content = {
    English: {
      title: "Multi-games",
      text1: "The first project I realized consisted of multiple games built using Java and Swing. The main game is the Saboteur which can be played with up to 8 people. There is also a puzzle as well as domino games which are only playable on the terminal.",
      text2: "",
      title2: "Technologies used",
      tech: "Java, Swing"
    },
    French: {
      title: "Multi-jeux",
      text1: "Le premier projet que j'ai réalisé est une interface de multi-jeux construite en utilisant Java et Swing. Le jeu principal est le Saboteur qui peut se jouer jusqu'à 8 personnes. IL y'a aussi un jeu de puzzle et de dominos qui est uniquement jouable sur console.",
      text2: "",
      title2: "Technologies utilisées",
      tech: "Java, Swing"
    }
  };
  
  props.language === "French"
    ? (content = content.French)
    : (content = content.English);

  return (
    <>
      <div className="project_vid">
        <div className="project_text_vid">
        <h2>{content.title}</h2>
          <p>
          {content.text1}
          </p>
          <p>
          {content.text2}
          </p>
          <h4>{content.title2}</h4>
          <p>
          {content.tech}</p>
          
          </div>
          <div className='project_demo'>
          <img src={require("../../images/demo_games_1.png")} alt="demo_games" width="45%" style={vidStyle}></img>
          <img src={require("../../images/demo_games2.png")} alt="demo_games" width="45%" style={vidStyle}></img>
          <p><a href='https://github.com/Kawthar1012/games'><i className="fa fa-github"></i> Multi-games</a></p>
          </div>
      </div>
    </>
  );
}

export default Ants;