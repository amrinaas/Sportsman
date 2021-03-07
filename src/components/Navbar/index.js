import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo/Logo.png";
import {useHistory} from 'react-router-dom';

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollY(window.setScrollY);
  };

  const history = useHistory();

  const handleSignIn = () => {
    history.push('/login')
  };

  return (
    <>
    <nav className={`layout ${scrollY > 20 ? "layout--white" : ""}`}>
      <div className="layout__logo">
        <a href="/">
          <img src={logo} alt="logo" className="layout__img" />
        </a>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>
        <ul className="layout__list">
          <li>
            <a href="feature">Feature</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </div>

      <button onClick={handleSignIn} className="layout__button">Ready To Sweat?</button>
    </nav>
    </>
  );
}

export default Navbar;
