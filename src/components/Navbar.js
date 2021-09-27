import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { FcDataSheet } from 'react-icons/fc';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
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

    window.addEventListener('resize', showButton);

    return (
        <Fragment>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className="navbar">
               <div className="navbar-container container">
                   <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                       <FcDataSheet className='navbar-icon' />
                       PosData
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       {click ? <FaTimes /> : <FaBars />}
                       </div>
                       <div className='nav-wrap'>
                       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                           <li className='nav-item'>
                               <Link to="/" className='nav-links' onClick={handleClick}>
                                   Home
                               </Link>
                           </li>

                           <li className='nav-item'>
                               <Link to="/services" className='nav-links' onClick={handleClick}>
                                   Services
                               </Link>
                           </li>

                           <li className='nav-item'>
                               <Link to="/products" className='nav-links' onClick={handleClick}>
                                   Products
                               </Link>
                           </li>
                           <li className='nav-btn'>
                               {button ? (
                                   <Link className='btn-link'>
                                       <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                   </Link>
                               ) : (
                                  <Link to="/sign-up" className='btn-link' onClick={handleClick}>
                                      <Button buttonStyle='btn--outline'
                                      buttonSize='btn--mobile'>
                                          SIGN UP
                                        </Button>
                                  </Link>
                               )}
                           </li>
                       </ul>
                       </div>
                   </div>
               </div>
               </IconContext.Provider>
        </Fragment>
    );
}

export default Navbar;
