

import React, { useState, useEffect } from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { House, UserCheck, BriefcaseBusiness, GraduationCap, Layers, SquarePen, MessageCircle, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Si la pantalla se hace más grande, cerramos el menú móvil
      if (window.innerWidth > 350) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <aside className={toggle ? 'aside show-menu' : 'aside'}>
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt="Logo" />
      </a>

      {windowWidth <= 350 && (
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <X size={20} /> : <Menu size={20} />}
        </div>
      )}

      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={() => setToggle(false)}>
                <House size={windowWidth <= 350 ? 24 : 28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setToggle(false)}>
                <UserCheck size={windowWidth <= 350 ? 24 : 28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={() => setToggle(false)}>
                <BriefcaseBusiness size={windowWidth <= 350 ? 24 : 28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link" onClick={() => setToggle(false)}>
                <GraduationCap size={windowWidth <= 350 ? 24 : 28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={() => setToggle(false)}>
                <Layers size={windowWidth <= 350 ? 24 : 28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => setToggle(false)}>
                <MessageCircle size={windowWidth <= 350 ? 24 : 28} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className='copyright'>&copy; 2025. </span>
      </div>
    </aside>
  );
};

export default Sidebar;
