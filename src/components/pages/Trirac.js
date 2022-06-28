import React from 'react';
import '../Card.css';
import video from "../../images/demo.mp4";

function Trirac(props) {

  let content = {
    English: {
      title: "Tri-rác",
      text1: "Tri-rác is a prototype of a waste sorting system that works both in an automated way and with the supervision of a human. It allows trash to be sorted and classified after being picked up and put on a conveyor. By introducing an app in the system, we can make sorting trash more accessible for everyone. In that way, we are giving control to the user over how they can sort their trash with the easiness an outside system can offer.",
      text2: "Tri-rác is a group project realized in collaboration with Hanoi University, Vietnam. The goal of the project was to build a prototype including the Lego EV3 robots. On the right is a video showing how the app can be used to control the different items passed to the conveyor as well as scanning them in order for the robot to do the classification by itself.",
      title2: "Technologies used",
      tech: "React Native (app), Flask (back end), Python libraries (OpenCV and ev3dev), socket programming and threads."
    },
    French: {
      title: "Tri-rác",
      text1: "",
      text2: "",
      title2: "Technologies utilisées",
      tech: "React Native (app), Flask (back end), librairies Python (OpenCV and ev3dev), socket programming et threads."
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
          <video src={video} alt="demo_trirac" height="600px" controls></video>
          <p><a href='https://github.com/Kawthar1012/ev3-remote'><i className="fa fa-github"></i> Tri-rác</a></p>
          </div>
      </div>
    </>
  );
}

export default Trirac;