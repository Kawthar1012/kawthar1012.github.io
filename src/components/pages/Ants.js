import React from 'react';
import file from '../../ressources/Fourmi.jar';

function Ants(props) {


  let content = {
    English: {
      title: "Ants",
      text1: "Ants is a group project realized during the second year of my Bachelor. The goal of the project was to build a simulator of ants trying to find food throughout randomized labyrinths. We used a Stochastic Local Search algorithm to program the ants' behaviour and enabled the ability to save simulations.",
      text2: "I mainly contributed as a team leader for the project, implemented the algorithm for the ants and built the UML class diagram.",
      title2: "Technologies used",
      tech: "Java, Swing"
    },
    French: {
      title: "Fourmis",
      text1: "Le projet fourmis est un projet de groupe réalisé durant ma seconde année de Licence. Le but du projet était de créer un simulateur dans lequel des fourmis cherchaient de la nourriture à travers un labyrinthe. Nous avons utilisé un algorithme de recherche locale afin de programmer le comportement des fourmis et avons permis l'enregistrement de simulations.",
      text2: "J'ai principalement contribué en tant que chef de projet, implémenté l'algorithme des fourmis et contruit le diagramme UML pour les classes.",
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
          <h4>{content.title2}</h4>
          <p>
          {content.tech}</p>
          
          </div>
          <div className='project_demo'>
          <img src={require("../../images/demo_ants.jpg")} alt="demo_ants" width="90%"></img>
          <p><a href='https://github.com/Kawthar1012/ants'><i className="fa fa-github"></i> Ants</a>
          <a href={file} download="Fourmi.jar"> Download</a></p>
          </div>
      </div>
    </>
  );
}

export default Ants;