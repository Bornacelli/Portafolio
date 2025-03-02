import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-7.png"


const data = [
  {

    id: 1,
    image: Image1,
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces atractivas y funcionales en Figma, enfocadas en la experiencia del usuario.",
    
  },
  {
    id: 2,
    image: Image2,
    title: "Desarrollo Frontend",
    description:
      "Creación de sitios web responsivos y aplicaciones interactivas utilizando React, Vite y diferentes librerías de estilos.",
    
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
      Servicios
    </h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        // Agregar clase condicional para la imagen con id 3
        const imgClassName = id === 3 ? "services__img services__img--special" : "services__img";
        
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className={imgClassName} />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
  </section>;
}

export default Services