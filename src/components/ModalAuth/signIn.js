import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import { postSignIn } from "../../redux/Action/userAction";
import logo from "../../assets/Images/Logo.png";
import "../../styles/navbar.css";
import MenuUser from "../MenuUser/index";


export const MODAL_LOGIN = 1;


export default function Modals({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  const [userSignIn, setUserSignIn] = useState({
    name: "",
    password: "",
    token: "",
  });

  const { signIn, jwtToken } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-container"
        overlayClassName="modal-overlay-center"
        contentLabel="Sign In"
      >
        {renderWhichModal()}
      </Modal>
    </>
  );

  function renderWhichModal() {
    const handleLogin = (event) => {
      event.preventDefault();
      setIsModalOpen(false);
    };

    const handleSignIn = (event) => {
      setUserSignIn({
        ...userSignIn,
        [event.target.name]: event.target.value,
      });
    };

    const sumbitSignIn = (event) => {
      event.preventDefault();
      const body = {
        username: userSignIn.name,
        password: userSignIn.password,
      };
      dispatch(postSignIn(body));
      setIsModalOpen(false);
    };

    if (whichModal === MODAL_LOGIN) {
       
        return (
          <div className="home-signup">
            <h1>SIGN IN</h1>
            <form onSubmit={handleLogin} className="home-login-form">
              <div>username</div>
              <input
                className="form-input"
                type="text"
                placeholder="username"
                name="name"
                onChange={(event) => handleSignIn(event)}
              />
              <div>Password</div>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => handleSignIn(event)}
              />
              <button
                onClick={sumbitSignIn}
                type="submit"
                className="home-login-button"
              >
                Sign In
              </button>
              <div className="redirect">
                <span onClick={() => setWhichModal(MODAL_SIGNUP)}>
                  Create an account
                </span>
              </div>
            </form>
          </div>
        );
    }
  }
}