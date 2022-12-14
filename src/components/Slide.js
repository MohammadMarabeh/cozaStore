import React from 'react';
import '../Styles/Slide.scss';
import MainPageText from './MainPageText';
import Navbar from './navbar';
const Slide = () => {
  return (
    <section className='section-slide'>
      
      <div className='main-section'>
         <Navbar />
         <MainPageText 
          Collection="Men Collection 2023"
          Type="NEW ARRIVALS"
         />
      </div>
      
    </section>
  )
}

export default Slide;