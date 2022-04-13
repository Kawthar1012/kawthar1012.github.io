import React from "react";
import '../../App.css';

export default function Order (props) {
    
    let content = {
        English: {
          title: "ORDER"
        },
        French: {
          title: "COMMANDER"
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return <h1 className="order">{content.title}</h1>;
}