import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from '../../router/Routes';
import '../../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbarLogoDiv">
        <h1 className="navbarLogoText">Ahsan</h1>
      </div>
      <div className={`menuIcon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbarUl ${isOpen ? 'open' : ''}`}>
        <li>
          <Link className="link" to={HOME} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={ABOUT} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={SKILLS} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="link" to={PROJECTS} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to={CONTACT} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
