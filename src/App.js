import React from 'react'
import logo from './logo.svg';
import './App.css';



import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portafolio from './components/portafolio/Portafolio';
// import Pricing from './components/pricing/Pricing';
// import Testimonials from './components/testimonials/Testimonials';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portafolio/>
      {/* <Pricing/>
      <Testimonials/>
      <Blog/> */}
      <Contact/>

    </main>
    </>
  )
}

export default App