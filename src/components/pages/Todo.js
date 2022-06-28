import React from 'react';
import '../Card.css';
import video from "../../images/demo.mp4";

function Todo(props) {

  let content = {
    English: {
      title: "To do list",
      text1: "IN PROGRESS",
      text2: "",
      title2: "Technologies used",
      tech: ""
    },
    French: {
      title: "To do list",
      text1: "EN COURS",
      text2: "",
      title2: "",
      tech: ""
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
          <p><a href='/'><i className="fa fa-github"></i> To do list</a></p>
          </div>
      </div>
    </>
  );
}

export default Todo;