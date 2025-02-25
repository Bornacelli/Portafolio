import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Bornacelli</h1>
        <span className="home__education">
          Desarrolladora Front-End
        </span>
        <HeaderSocials/>

        <a href='#contact' className='btn'>¡Aqui!</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home