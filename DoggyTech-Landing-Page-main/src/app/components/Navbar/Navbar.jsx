'use client';

import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';
import { Button } from '../Button/Button';
import Link from 'next/link';

export default function Navbar() {
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
    window.addEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          <span className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/WhiteLogo.png" alt="Logo DoggyTech" />
          </span>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link href="#servicios" className="nav-links" onClick={closeMobileMenu}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#nosotros" className="nav-links" onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#form" className="nav-links-mobile" onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">
              <Link href="#form">Contacto</Link>
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}
