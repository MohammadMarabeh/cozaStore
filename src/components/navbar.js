import React from 'react';
import '../Styles/Navbar.scss';
import BottomNav from './BottomNav';
import TopNav from './TopNav';
const Navbar = () => {

   // function changeColor(event){
   //    event.target.style.color = 'rgb(75, 75, 255)';
   //    event.target.style.transition = '0.7s';
   // }

   // function getColorBack(event){
   //    event.target.style.color = '#333';
   //    event.target.style.transition = '0.7s';
   // }


  return (
    <header>
      <div className='container-menu-desktop'>
         <TopNav />
         <BottomNav />
         
      </div>
    </header>
    
  );
}

export default Navbar;