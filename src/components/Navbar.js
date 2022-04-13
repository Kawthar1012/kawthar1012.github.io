import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(props) {

    let content = {
        English: {
          title: "Home",
          title2: "Journey",
          title3: "Projects",
          lang: "French"
        },
        French: {
          title: "Accueil",
          title2: "Parcours",
          title3: "Projets",
          lang: "English"
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        {content.title}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/journey' className='nav-links' onClick={closeMobileMenu}>
                        {content.title2}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        {content.title3}
                        </Link>
                        <ul className='dropdown'>
                            <li className='nav-item'>
                            <Link to='/projects/choices' className='nav-links' onClick={closeMobileMenu}>
                                Choices
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/projects/tri_rac' className='nav-links' onClick={closeMobileMenu}>
                                Tri-rac
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/projects/bounce_reloaded' className='nav-links' onClick={closeMobileMenu}>
                                Bounce Reloaded
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                ...
                            </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                    <Link to={props.path} className='nav-links'
                        onClick={e => props.handleSetLanguage(e.target.innerHTML==='English'?'English':'French')}>
                            {content.lang}
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
