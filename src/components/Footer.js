import React from 'react';
import './Footer.css'

function Footer(props) {



  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <a href='https://www.linkedin.com/in/kawthar-el-ouardi-b1076a19a/'><i className="fa-brands fa-linkedin-in"></i> Kawthar El Ouardi</a>
                    <a href='https://github.com/Kawthar1012'><i className="fa fa-github"></i> Kawthar1012</a>
                    <a href="/"><i className="fa fa-envelope"></i> k.el@live.fr</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer