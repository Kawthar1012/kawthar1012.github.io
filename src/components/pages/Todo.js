import React from 'react';
import '../Card.css';
import video from "../../images/demo.mp4";

function Todo(props) {

  const vidStyle = {
    margin: '2%',
  };

  let content = {
    English: {
      title: "Choices",
      text1: "This project consists of a simple website where the user has to reply to multiple questions until reaching an idea of activity to pass time, depending on their answers.",
      text2: "",
      title2: "Technologies used",
      tech: "Figma, Angular, Node.js"
    },
    French: {
      title: "Choix",
      text1: "Ce projet est un site web simple qui pose des questions à lutilisateur et à la fin propose une idée d'activité basé sur les réponses données.",
      text2: "",
      title2: "Technologies utilisées",
      tech: "Figma, Angular, Node.js"
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
          <h4>{content.title2}</h4>
          <p>
          {content.tech}</p>
          
          </div>
          <div className='project_demo'>
          <img src={require("../../images/choices.png")} alt="demo_choices" width="100%" style={vidStyle}></img>
          <p><a href='https://github.com/Kawthar1012'><i className="fa fa-github"></i> To do list</a></p>
          </div>
      </div>
    </>
  );
}

export default Todo;