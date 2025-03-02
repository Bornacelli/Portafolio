import React, {useState} from 'react'
import "./portafolio.css"
import Menu from './Menu'

const Portafolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updateItems);
  }
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Trabajos Recientes</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Todos</span>
        <span className="work__item" onClick={() => filterItem ("Desarrollo")}>Desarrollo</span>
        <span className="work__item" onClick={() => filterItem ("Mockups")}>Mockups</span>
        {/* <span className="work__item" onClick={() => filterItem ("Design")}>Diseños</span>
        <span className="work__item" onClick={() => filterItem ("Branding")}>Branding</span> */}
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category, link} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portafolio