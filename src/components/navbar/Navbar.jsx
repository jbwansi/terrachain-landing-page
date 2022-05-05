import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'
import terraLogo from '../../assets/terraLogo.svg'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="terrachain__navbar">
      <div className="terrachain__navbar-links">
        <div className="terrachain__navbar-links_logo">
          <img src={terraLogo} alt="logo" />
        </div>
        <div className="terrachain__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is Terrachain?</a></p>
          <p><a href="#possibility">Possibilities</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="terrachain__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="terrachain__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="terrachain__navbar-menu_container scale-up-center">
          <div className="terrachain__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is Terrachain?</a></p>
            <p><a href="#possibility">Possibilities</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="terrachain__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar