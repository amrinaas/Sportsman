import React from "react";
import logo from "../../assets/img/logo/Logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const handleSignIn = () => {
    history.push("/login");
  };
  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload(true);
  };

  // const handleSignOut = () => {
  // 	localStorage.removeItem('token');
  // 	history.push('/');
  // 	window.location.reload(true);
  // };

  const token = localStorage.getItem("token");

  return (
    <>
      <nav className="layout2">
        <div className="layout2__logo">
          <img
            src={logo}
            onClick={handleHome}
            alt="logo"
            className="layout2__img"
          />
        </div>

        {token ? (
          <button onClick={handleSignOut} className="layout2__button">
            Sign Out
          </button>
        ) : (
          <button onClick={handleSignIn} className="layout2__button">
            Login
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
