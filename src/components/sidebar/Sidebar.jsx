import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

import { House, UserCheck, BriefcaseBusiness, GraduationCap, Layers, SquarePen, MessageCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt="" />
      </a>

      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <House size={28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <UserCheck size={28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BriefcaseBusiness size={28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <GraduationCap size={28} />
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
                <Layers size={28} />
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#blog" className="nav__link">
                <SquarePen size={28} />
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <MessageCircle size={28} />
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
