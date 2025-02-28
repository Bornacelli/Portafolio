import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';


const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.linkedin.com/in/laura-bornacelli-81a211263/" className="home__social-link" target='_blank' rel="noopener noreferrer">
        <FaLinkedin size={20} />
      </a>

      <a href="https://github.com/Bornacelli" className="home__social-link" target='_blank' rel="noopener noreferrer">
        <FaGithub size={20} />
      </a>

      <a href="https://www.fiverr.com/laurabornacelli/buying?source=avatar_menu_profile" className="home__social-link" target='_blank' rel="noopener noreferrer">
        <SiFiverr size={28} />
      </a>

      <a href="#" className="home__social-link">
        <MdEmail size={20} />
      </a>
    </div>
  );
};

export default HeaderSocials;
