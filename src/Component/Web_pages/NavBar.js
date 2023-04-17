import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assests/logo.png'
import '../Style_pages/NavBar.css'

const NavBar = () => {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logIn"); 
    localStorage.removeItem("TotalItems")
    Navigate('/Home')
    window.location.reload();
  };

  return (
    <div className='Nav'>
        <div className='Nav-logo'>
        <img src={logo} className="img-logo" alt="brand" />
        </div>
        
        <div className='menu-btn'>
            <Link className='Menu' to="/">Home</Link>
            {localStorage.getItem("logIn") ? <Link className='Menu' to="/Cart">Cart</Link> : <></>}
            {localStorage.getItem("logIn") ? <Link className='Menu' to="/Order">Order</Link> : <></>} 
            <Link className='Menu' to="/About">About</Link>
            <Link className='Menu' to="/Contact">Contact</Link>
        </div> 
        <div className='login-btn'>
        {localStorage.getItem("logIn") ? <button className='Menu' onClick={handleLogout}>Logout</button> : <Link className='Menu' to="/LogIn">LogIn</Link>}
        </div>
    </div>
  )
}

export default NavBar