import React, { useState, useEffect } from "react";
import _ from "lodash";
import logo from "../../assets/Images/Logo.png";
// import ModalAuth from '../ModalAuth/index';
import ModalSignUp from '../ModalAuth/signUp';

function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSignIn, setIsModalOpenSignIn] = useState(false);
  const [isModalOpenSignUp, setIsModalOpenSignUp] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollY(window.setScrollY);
  };

  return (
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
      <button onClick={() => setIsModalOpenSignUp(true)} className="layout__button">Ready To Sweat?</button>
      <ModalSignUp isOpen={isModalOpenSignUp} />
      {/* <ModalAuth isOpen={isModalOpen}/> */}
    </nav>
  );
}

export default Navbar;
