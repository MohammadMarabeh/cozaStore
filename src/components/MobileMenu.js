import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../Styles/MobileMenu.scss';
const MobileMenu = () => {

   const [open, setOpen] = useState(false);

   const haburgerIcon = <AiOutlineMenu className="HamIcon" size="30px" cursor="pointer" color='#333' onClick={() => setOpen(!open)}/>

   const closeIcon = <AiOutlineClose className="HamIcon" size="30px" cursor="pointer" color='#333' onClick={() => setOpen(!open)}/>
  return (
   
   <div className='menu-mobile'>
      {open ? closeIcon : haburgerIcon}
      {open && <ul className='main-menu'>
         <li className='active-menu'><a href='/'>Home</a></li>
         <li><a href='/' >Shop</a></li>
         <li className='label1'><a href='/'>Features</a></li>
         <li><a href='/'>Blog</a></li>
         <li><a href='/'>About</a></li>
         <li><a href='/'>Contact</a></li>
      </ul>}
   </div>

   
  )
}

export default MobileMenu;