import React from 'react';
import '../Card.css';
import video from "../../images/demo_bounce.mp4";

function Todo(props) {

  let content = {
    English: {
      title: "Bounce Reloaded",
      text1: "Bounce is a platform game that came out on Nokia in 2008. In order to fulfill the requirements of a UI Programming course, me and my teammates have decided to reproduce it using Flutter. For that, we first designed the main elements on Figma before learning Dart, the language used in Flutter, in order to build an accessible and simple interface for the game.",
      text2: "Flutter isn't built for games which means I had to code a big part of the physics and the logic of the game from scratch. The project is still in progress as new levels are planned as well as a better gameplay overall for the user.",
      title2: "Technologies used",
      tech: "Flutter, Figma"
    },
    French: {
      title: "Bounce Reloaded",
      text1: "Bounce est un jeu de platforme qui est sorti sur les portables Nokia en 2008. Afin de remplir les critères pour un cours de User Interface, moi et mes camarades avons décidé de le reproduire en utilisant Flutter. Pour cela, nous avons dans un premier temps réalisé des sketchs à l'aide de Figma puis appris Dart, le language de programmation utilisé par Flutter, afin de construire une interface de jeu simple.",
      text2: "Flutter n'est pas fait pour la programmation de jeux vidéos ce qui signifie que j'ai du coder une bonne partie de la logique du jeu par moi-même. Le projet est toujours en cours et dez nouveaux niveaux sont plannifiés ainsi qu'une correction permettant un meilleur gameplay.",
      title2: "Technologies utilisées",
      tech: "Flutter, Figma"
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
          
          
          <video src={video} alt="demo_bounce" height="600px" controls></video>
          <p><a href='https://github.com/Kawthar1012/UI2'><i className="fa fa-github"></i> Bounce Reloaded</a></p>
          </div>
      </div>
    </>
  );
}

export default Todo;