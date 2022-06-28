import React from 'react';
import '../Card.css';
import video from "../../images/demo_dutchman.mp4";

function Todo(props) {

  const vidStyle = {
    margin: '2%',
  };

  let content = {
    English: {
      title: "The Flying Dutchman",
      text1: "The Flying Dutchman is a group project destined to be used for a bar. It can serve for managers, waiters and costumers in different ways as they order and receiver orders. It uses basic principles of Web Development to apply key concepts like drag and drop and undo/redo.",
      text2: "The webiste is still being updated.",
      title2: "Technologies used",
      tech: "HTML, css, Javascript"
    },
    French: {
      title: "The Flying Dutchman",
      text1: "The Flying Dutchman est un projet de groupe destiné à être utilisé pour un bar. Il peut être utilisé par un manager, des serveurs ou des clients de différentes façons pour commander ou recevoir des commandes. Il utilise des principes de bases du développement web afin de mettre en application des concepts clés tels que le drag and drop et le undo/redo.",
      text2: "Le projet est toujours en cours.",
      title2: "Technologies utilisées",
      tech: "HTML, css, Javascript"
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
          <img src={require("../../images/demo_dutchman.png")} alt="demo_dutchman" width="45%" style={vidStyle}></img>
          <video src={video} alt="demo_dutchman_vid" width="45%" controls style={vidStyle}></video>
          <p><a href='/'><i className="fa fa-github"></i> The Flying Dutchman</a></p>
          </div>
      </div>
    </>
  );
}

export default Todo;