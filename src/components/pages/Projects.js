import React from "react";
import '../../App.css';
import Cards from "../Cards";

export default function Projects (props) {
    
    let content = {
        English: {
          title: "PROJECTS"
        },
        French: {
          title: "PROJETS"
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return (
    <div className="aboutProjects">
    <h1 className="projects">{content.title}</h1>
    <Cards language={props.language}/>
    </div>);
}