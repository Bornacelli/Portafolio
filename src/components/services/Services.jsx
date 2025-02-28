import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"


const data = [
  {
    id: 1,
    image: Image1,
    title: "Desarrollo Frontend",
    description:
      "Creación de sitios web responsivos y aplicaciones interactivas utilizando React, Vite y diferentes librerías de estilos.",
  },
  {
    id: 2,
    image: Image2,
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces atractivas y funcionales en Figma, enfocadas en la experiencia del usuario.",
  },
  {
    id: 3,
    image: Image3,
    title: "Optimización Web",
    description:
      "Mejora del rendimiento, accesibilidad y SEO técnico para lograr una experiencia fluida y eficiente.",
  },
];




const Services = () => {
  return <section className="services container section" id='services'>
    <h2 className="section__title">
      Services
    </h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
  </section>;
}

export default Services