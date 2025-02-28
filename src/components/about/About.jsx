import React from 'react'
import "./about.css"
import about from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">
        Sobre Mí
      </h2>

      <div className="about__container grid">
        <img src={about} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Soy Desarrolladora frontend enfocada en sitios web responsivos y aplicaciones interactivas. Trabajo con React, con diversas librerías de estilos y diseño UI/UX en Figma para crear experiencias atractivas y funcionales.
            </p>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn">Descargar CV</a>

          </div>

          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">TailWind</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Figma</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About