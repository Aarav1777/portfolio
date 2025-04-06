import React, { useState } from 'react'
import { Link } from 'react-scroll';

import './navbar.css';
import logo from '../../assests/logo5.png'; // change logo
// import logo from '../../assests/Acode (2).jpg';
// import logo from '../../assests/B code (1).jpg';


import contactImg from '../../assests/contact.png';
import menu from '../../assests/menu.png';



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='Skils' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>

      </div>

     

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
      </button>
        
     

      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem " onClick={() => setShowMenu(false)}>Home </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Client</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>contact</Link>
      



      </div>
    </nav>
  )

}

export default Navbar
