import React from 'react';
import '../Styles/TopNav.scss';
const TopNav = () => {
  return (
   <div className='top-bar'>
      <div className='content-topbar container'>
         <div className='left-top-bar'>
         Free shipping for standard order over $100
         </div>
         <div className='right-top-bar'>
            <a href='/'>Help & FAQs</a>
            <a href='/'>My Account</a>
            <a href='/'>EN</a>
            <a href='/'>USD</a>
         </div>
      </div>
   </div>
  )
}

export default TopNav;