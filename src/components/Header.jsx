import React from "react";
import "./Header.css";
import menu from "./menu.svg";
const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4 data-aos="fade-down">Food Management</h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu" data-aos="fade-down">
          <li>
            <a href="#food">Menu</a>
          </li>
          <li>
            <a href="#menu">Food</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>

        <ul className="header__menu-mobile" data-aos="fade-down">
          <li>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
