import React from "react";
import '../../App.css';

export default function Values (props) {
    
    let content = {
        English: {
          title: "OUR VALUES"
        },
        French: {
          title: "NOS VALEURS"
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return <h1 className="values">{content.title}</h1>;
}