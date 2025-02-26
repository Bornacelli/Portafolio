import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div className="">
                <h3 className="about__title">0</h3>
                <span className="about__subtitle">Proyectos Completados</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div className="">
                <h3 className="about__title">0</h3>
                <span className="about__subtitle">Reuniones</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div className="">
                <h3 className="about__title">0</h3>
                <span className="about__subtitle">Clientes Satisfechos</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div className="">
                <h3 className="about__title">0</h3>
                <span className="about__subtitle">Premios</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox