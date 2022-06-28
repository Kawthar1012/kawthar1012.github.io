import React from "react";
import '../../App.css';

export default function Journey (props) {
    
    let content = {
        English: {
          title: "MY JOURNEY",
          text1: "I have always been inspired to travel abroad. First by my father as a kid "+
          "and later as I discovered what it was bringing me personally. I started studying Computer Science "+
          "in Paris when I was 17. I completed a Bachelor's degree at Université Paris Diderot in June 2020.\n\n",
          text2: "After graduating, I decided to take a gap year to travel and strengthen my language skills. I spent"+
          " 3 months in Malaga, in the South of Spain, then traveled to Singapore for 3 months as well in order "+
          "to solidy my English.\n\n ",
          text3: "As I didn't want to stop just yet, I decided to apply for a Master's degree at Uppsala University, Sweden."+
          "In the meantime, I discovered my love for more intense experiences, I went on a few multiple days hikes and went "+
          "bungee jumping. All of this prepared me to adapt to my new life in Sweden where I am completing my studies."
        },
        French: {
          title: "MON PARCOURS",
          text1: "J'ai toujours été inspiré par le fait de voyager à l'étranger. Dans un premier temps par mon père, étant enfant "+
          "puis plus tard en découvrant ce que cela m'apportait personellement. J'ai commencé mes études en Informatique à Paris à "+
          "l'âge de 17 ans. J'ai obtenu ma Licence à l'Université Paris Diderot en Juin 2020.",
          text2: "Après avoir obtenu mon diplôme, j'ai décide de prendre une année de césure afin de voyager et d'approfondir mes "+
          "connaissances en langues. J'ai passé 3 mois à Malaga, en Andalousie, puis 3 autres mois à Singapour afin de solidifier "+
          "mon niveau d'anglais.",
          text3: "Je n'ai pas souhaité m'arrêter tout de suite puisque j'ai ensuite postulé pour un Master en Informatique à "+
          "l'université d'Uppsala en Suède. J'ai, en même temps, découvert mon attrait pour les expériences fortes, je suis parti "+
          "faire des randonnées sur plusieurs jours ainsi que du saut à l'élastique. Tout cela m'a préparé à m'adapter rapidement "+
          "à ma nouvelle vie en Suède où je termine mes études."
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return ( <div className="aboutJourney">
    <h1 className="journey">{content.title}</h1>
    <div className="text1">
   <p>{content.text1}</p>
   <img src={require("../../images/Uni.jpg")} alt="Bachelor" width="80%"/>
   </div>
   <div className="text2">
   <img src={require("../../images/gap_year.jpeg")} alt="Gap year" width="60%"/>
   <p>{content.text2}</p>
   </div>
   <div className="text3">
   <p>{content.text3}</p>
   <img src={require("../../images/sweden.jpeg")} alt="Sweden" width="90%"/>
   </div>
   </div>
    );
}