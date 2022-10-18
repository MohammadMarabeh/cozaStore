import React from 'react';
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import '../Styles/BottomNav.scss';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
const BottomNav = () => {
  	return (
   <div className='wrap-menu-desktop'>
      <nav className='limiter-menu-desktop container'>
         <a href='/' className='logo'>
            <img src='data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=' alt='logo' />
         </a>
         <DesktopMenu />
			<MobileMenu />
         <div className='wrap-icon-header'>
            <div className='icon-header-item cl2 trans-4 p-r-11 p-l-22'><i className='zmdi-search zmdi'><AiOutlineSearch /></i></div>
            <div className='icon-header-item cl2 trans-4 p-r-11 p-l-22'><i className='zmdi-shopping-cart zmdi'><MdShoppingCart /></i></div>
            <a href='/' className='icon-header-item cl2 trans-4 p-r-11 p-l-22'><i className='zmdi-favorite zmdi'><AiOutlineHeart /></i></a>
         </div>
      </nav>
   </div>
  )
}

export default BottomNav;