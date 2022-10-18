import React from 'react';
import '../Styles/Cards.scss';
const Cards = ({ imgURL, Collection, Info}) => {
  return (
   <div className='col-md-6 col-xl-4 p-b-30 m-lr-auto'>
      <div className='block1 wrap-pic-w'>
         <div className='overLay'></div>
         <img className='img' src={ imgURL } alt="ima Banner" />
         <a href='/' className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'>
            <div className='block1-txt-child1 flex-col-l'>
               <span className='block1-name ltext-102 trans-04 p-b-8'> { Collection } </span>
               <span className='block1-info stext-102 trans-04'> { Info } </span>
            </div>
         </a>
         <div className='shopNow'>
               <span>Shop Now</span>
         </div>
      </div>
   </div>
  )
}

export default Cards;