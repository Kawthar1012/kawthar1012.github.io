import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(props) {

    let content = {
        English: {
          title: "Home",
          title2: "Menu",
          title3: "Our values",
          button: "ORDER",
          lang: "French"
        },
        French: {
          title: "Accueil",
          title2: "Menu",
          title3: "Nos valeurs",
          button: "COMMANDER",
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
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    VATT <i className="fa-solid fa-cookie"></i>
                </Link>
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
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                        {content.title2}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/values' className='nav-links' onClick={closeMobileMenu}>
                        {content.title3}
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to={props.path} className='nav-links'
                        onClick={e => props.handleSetLanguage(e.target.innerHTML==='English'?'English':'French')}>
                            {content.lang}
                    </Link>
                    </li>
                    <li>
                    <Link to='/order' className='nav-links-mobile' onClick={closeMobileMenu}>
                        {content.button}
                    </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' path='/order'>{content.button}</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;
