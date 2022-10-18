import React from 'react';
import '../Styles/MainPageText.scss';
const MainPageText = ({ Collection, Type}) => {
  return (
   <div className='main-page-text'>
   <div className='text1'>
     <span>{ Collection }</span>
   </div>
   <div className='text2'>
     <h2>{ Type }</h2>
   </div>
   <div className='shop-now'>
     <a href='/'>Shop Now</a>
   </div>
</div>
  )
}

export default MainPageText;

