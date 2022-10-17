import React from 'react';
import '../Styles/Slide.scss';

import Navbar from './navbar';
const Slide = () => {
  return (
    <section className='section-slide'>
      <div className='main-section'>
         <Navbar />
         <div className='main-page-text'>
            <div className='text1'>
              <span>Men Collection 2022</span>
            </div>
            <div className='text2'>
              <h2>NEW ARRIVALS</h2>
            </div>
            <div className='shop-now'>
              <a href='/'>Shop Now</a>
            </div>
         </div>
      </div>
      
    </section>
  )
}

export default Slide;