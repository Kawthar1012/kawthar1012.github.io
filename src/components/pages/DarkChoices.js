import React from 'react';
import '../Card.css';
import video from "../../videos/dark_choices.mp4";

function Todo(props) {

  const vidStyle = {
    margin: '2%',
  };

  let content = {
    English: {
      title: "Dark Choices",
      text1: "This project was made for one of my sister's course. It's a simulation of an interactive horror game, the final result is the trailer for the game or episode 0.",
      text2: "Other than being a family project, which made it fun to work on, I also wanted to see how I could build a simple .NET web application with an efficient system and architecture.",
      title2: "Technologies used",
      tech: ".NET, C#, Javascript, MVC"
    },
    French: {
      title: "Dark Choices",
      text1: "Ce projet a été fait dans le cadre d'un des cours de ma soeur. C'est une simulation d'un jeu interactif d'horreur. Le résultat final est le trailer du jeu ou épisode 0.",
      text2: "Ce fut un  projet familial, ce qui le rendit amusant. Je souhaitais aussi réaliser une web application .NET simple avec une architecture efficace.",
      title2: "Technologies utilisées",
      tech: ".NET, C#, Javascript, MVC"
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
          <p><a href='https://github.com/Kawthar1012/DarkChoices'><i className="fa fa-github"></i>Dark Choices</a></p>
          </div>
      </div>
    </>
  );
}

export default Todo;