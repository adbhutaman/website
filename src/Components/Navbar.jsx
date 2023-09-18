import React from 'react'
import { NavLink } from 'react-router-dom';

import Image from '../Images/logoschool.png';
const Navbar = () => {
   

  return (
    <>
    
<nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg ">
  <div className="container-fluid">
     <NavLink activeClassName="menu_active" className="navbar-brand" to="/">
        <img src={Image} alt='Brand' className='img-fluid'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav  ">
        <li className="nav-item">
           <NavLink exact activeClassName = "selected" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
           <NavLink exact activeClassName="selected" className="nav-link" to="/about">About Us</NavLink>
        </li>
        
        <li className="nav-item dropdown">
           <NavLink activeClassName="menu_active" className="nav-link dropdown-toggle" to="/programms" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Programms
          </NavLink>
          <ul className="dropdown-menu">
            <li> <NavLink activeClassName="menu_active" className="nav-link dropdown-item" to="/programms">Preschool</NavLink></li>
            <li> <NavLink activeClassName="menu_active" className="nav-link dropdown-item" to="/programms/daycare">Day Care</NavLink></li>
            <li> <NavLink activeClassName="menu_active" className="nav-link dropdown-item" to="/programms/summercamp">Summer Camp</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
           <NavLink activeClassName="menu_active" className="nav-link" to="/parent">Parents</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar