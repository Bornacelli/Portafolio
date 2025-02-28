import React from 'react';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">+3</h3>
          <span className="about__subtitle">Proyectos Personales</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-briefcase"></i>
        <div>
          <h3 className="about__title">En progreso</h3>
          <span className="about__subtitle">Experiencia Profesional</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-energy"></i>
        <div>
          <h3 className="about__title">100%</h3>
          <span className="about__subtitle">Compromiso y Aprendizaje</span>
        </div>
      </div>

      {/* <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">Primero de muchos</h3>
          <span className="about__subtitle">Logros en mi carrera</span>
        </div>
      </div> */}

    </div>
  );
};

export default AboutBox;
