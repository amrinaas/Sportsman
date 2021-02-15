import React, { useState } from "react";
import Modal from "react-modal";
import { postSignUp } from "../../redux/Action/userAction";
import logo from "../../assets/Images/Logo.png";
import "../../styles/navbar.css";
import ModalSIgnIn from './signIn';


export default function signUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSignIn, setIsModalOpenSignIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleSignUp = () => {
    console.log('daftar gan, submit form ke redux');
  }

  const handleClickLogin = () => {
    console.log('Open Modal Login');
    setIsModalOpenSignIn(true);
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-container"
        overlayClassName="modal-overlay-center"
        contentLabel="Sign Up"
      >
        <div className="home-signup">
            <div className="title-wrap">
              <img className="logo-signup" src={logo} alt="logo" />
            </div>
            <form className="home-login-form">
              <div>Full Name</div>
              <input
                className="form-input"
                type="text"
                placeholder="Full Name"
                name="name"
              />

              <div>Email</div>
              <input
                className="form-input"
                type="email"
                placeholder="Email"
                name="email"
              />

              <div>Password</div>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                name="password"
              />

              <button
                onClick={handleSignUp}
                type="submit"
                className="home-login-button"
              >
                Sign Up
              </button>
              <div className="redirect">
                Already have an account?
                <span onClick={handleClickLogin}>Log In</span>
              </div>
            </form>
          </div>
      </Modal>
      <ModalSIgnIn isOpen={isModalOpenSignIn} />
    </>
  );
}