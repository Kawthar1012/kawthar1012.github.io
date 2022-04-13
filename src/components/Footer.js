import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(props) {

    let content = {
        English: {
          about: "About us",
          social: "Our social media",
          invest: "Our investors",
          furnish: "Our furnishers",
          contact: "Contact us",
          reservation: "Booking",
          recruitment: "Recruitment",
          info: "Information",
        },
        French: {
          about: "A propos",
          social: "Nos réseaus sociaux",
          invest: "Nos invertisseurs",
          furnish: "Nos producteurs",
          contact: "Nous contacter",
          reservation: "Réservation",
          recruitment: "Recrutement",
          info: "Informations",
        }
      };
      
    props.language === "French"
        ? (content = content.French)
        : (content = content.English);


  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>{content.about}</h2>
                    <Link to='/'>{content.social}</Link>
                    <Link to='/'>{content.invest}</Link>
                    <Link to='/'>{content.furnish}</Link>
                </div>
                <div class='footer-link-items'>
                  <h2>{content.contact}</h2>
                  <Link to='/'>{content.reservation}</Link>
                  <Link to='/'>{content.recruitment}</Link>
                  <Link to='/'>{content.info}</Link>
                </div>
                <div class='footer-link-items'>
                <Link to='/' className='navbar-logo'>
                    VATT <i className="fa-solid fa-cookie"></i>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer