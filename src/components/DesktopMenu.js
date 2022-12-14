import React from 'react';
import '../Styles/DesktopMenu.scss';
const DesktopMenu = () => {
  return (
   <div className='menu-desktop'>
      <ul className='main-menu-desktop'>
         <li className='active-menu'><a href='/'>Home</a></li>
         <li><a href='/' >Shop</a></li>
         <li className='label1'><a href='/' className='feat'>Features</a></li>
         <li><a href='/'>Blog</a></li>
         <li><a href='/'>About</a></li>
         <li><a href='/'>Contact</a></li>
      </ul>
   </div>
  )
}

export default DesktopMenu;