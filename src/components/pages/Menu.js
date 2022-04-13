import React from "react";
import '../../App.css';

export default function Menu (props) {
    
    let content = {
        English: {
          title: "MENU"
        },
        French: {
          title: "MENU"
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return <h1 className="menu">{content.title}</h1>;
}