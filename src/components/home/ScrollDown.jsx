import React from 'react'

const ScrollDown = () => {
  return (
    <div className="scroll__down">
        <a href="" className="mouse__wrapper">
            <a href="#about">
            <span className="home__scroll-name">Desplazar hacia abajo</span>
            </a>
            <a href="#about" className="mouse-link">
              <span className="mouse">
                <span className="wheel"></span>
              </span>
            </a>

        </a>
    </div>
  )
}

export default ScrollDown