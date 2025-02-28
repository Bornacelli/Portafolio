import React from 'react'
import "./pricing.css"
import imagen1 from "../../assets/price-1.svg"
import imagen2 from "../../assets/price-2.svg"
import imagen3 from "../../assets/price-3.svg"

const Pricing = () => {
  return (
    <section className="container section">
      <h2 className="section__title">Precios Planes</h2>

      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={imagen1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basico</h3>
          <p className="pricing__title">a Simple option but powerful</p>
          <p className="pricing__support">Email Support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Meses</span>
          </h3>
          <a href="" className="btn">Obtener</a>
        </div>

        <div className="pricing__item best">
        <span className="badge">Recomendación</span>
          <img src={imagen2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">a Simple option but powerful</p>
          <p className="pricing__support">Mon-Fri support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Meses</span>
          </h3>
          <a href="" className="btn">Obtener</a>
        </div>

        <div className="pricing__item ">
          
          <img src={imagen3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">a Simple option but powerful</p>
          <p className="pricing__support">24/7 Support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Meses</span>
          </h3>
          <a href="" className="btn">Obtener</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing