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
          "bungee jumping. All of this prepared me to adapt to my new life in Sweden where I completed a Master's Degree in Computer Science.\n\n",
          text4: "After graduating, I decided to stay in Sweden and move to Stockholm to start working as a developer at Apotea, an online pharmacy. "+
          "During my studies, I had the chance to participate in a few extracurricular activities, one of them being an active member at a student association. "+
          "I also took part in the Female Digital Engineer program, which allowed me to discover the tech scene in Stcokholm and meet inspiring students. "+
          "My love for hiking has grown, and I discovered a passion for running which led me to participate in the Stockholm Half Marathon in 2024. " +
          "After a year of experience as a developer, I can confidently say I love problem solving and building new systems as much, if not more as my " +
          "primary passion: traveling.\n\n"
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
          "à ma nouvelle vie en Suède où j'ai terminé mes études l'an dernier.",
          text4: "Après avoir obtenu mon diplôme, j'ai déménagé à Stockholm pour travailler en tant que dévélopeuse à Apotea, une pharmacie "+
          "en ligne. Durant mes études, j'ai eut la chance d'être active dans une association universitaire. J'ai également participé "+
          "au programme Female Digital Engineer qui m'a permis d'en apprendre plus sur la scène Tech à Stockholm et de rencontrer des "+
          "étudiantes et professionels du métier. J'ai dévelopé une passion pour la course qui m'a amené à participer à un semi-marathon en 2024. "+
          "Après un an d'expérience en tant que dévelopeuse, ma passion pour la programmation n'a fait que grandir, aditionellement à ma passion "+
          "initiale pour le voyage. \n\n"
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return ( <div><h1 className="journey">{content.title}</h1> 
    <div className="aboutJourney">   
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
   <div className="text4">
   <img src={require("../../images/graduation.jpeg")} alt="Graduation" width="60%"/>
   <p>{content.text4}</p>
   </div>
   </div>
   </div> 
    );
}