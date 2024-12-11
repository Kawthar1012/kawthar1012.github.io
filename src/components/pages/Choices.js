import React from 'react';
import '../Card.css';
import video from "../../videos/choices.mp4";

function Choices(props) {

  const vidStyle = {
    margin: '2%',
  };

  let content = {
    English: {
      title: "Choices",
      text1: "This project consists of a simple website where the user has to reply to multiple questions until reaching an idea of activity to pass time, depending on their answers.",
      text2: "I developed the idea for this project when I decided to move to a new city, and wanted a way to find activities in a new place. I also wanted to learn about Angular and Typescript.",
      title2: "Technologies used",
      tech: "Figma, Angular, Typescript, animations"
    },
    French: {
      title: "Choix",
      text1: "Ce projet est un site web simple qui pose des questions à l'utilisateur et à la fin propose une idée d'activité basé sur les réponses données.",
      text2: "J'ai eut l'idée de ce projet quand j'ai décidé de déménager dans une nouvelle ville et je souhaitais un moyen de trouver des activités dans un nouvel endroit.",
      title2: "Technologies utilisées",
      tech: "Figma, Angular, Typescript, animations"
    }
  };
  
  props.language === "French"
    ? (content = content.French)
    : (content = content.English);

  return (
    <>
      <div className="project">
        <div className="project_text">
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
          <video src={video} alt="demo_dark_choices" width="100%" style={vidStyle} autoPlay loop muted></video>
          <p><a href='https://github.com/Kawthar1012/Choices'><i className="fa fa-github"></i>Choices</a></p>
          </div>
      </div>
    </>
  );
}

export default Choices;