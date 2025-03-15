import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "wouter";


function NavBar() {

  const [isNavBarShowing, setNavBarShowing] = useState(false);

  useEffect(() => {
    const syncNavBarState = () => {
        setNavBarShowing(window.innerWidth >= 992);
    };
    syncNavBarState();
    window.addEventListener('resize', syncNavBarState);
    return () => window.removeEventListener('resize', syncNavBarState);

  },[]);

  const [location] =useLocation();

  const toggleNavBar = () => {
    setNavBarShowing(!isNavBarShowing);

  };

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link href="/" className="navbar-brand">E-Shop</Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavBar}
        
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavBarShowing ? "show" : ""}`}
      id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link href="/" className={`nav-link ${location === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className={`nav-link ${location === '/products' ? 'active' : ''}`}>Products</Link>
          </li>
          <li className="nav-item">
            <Link href="/register" className={`nav-link ${location === '/register' ? 'active' : ''}`}>Register</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )

}

export default NavBar;