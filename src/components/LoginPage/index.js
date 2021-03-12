import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo/Logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postSignIn } from "../../redux/Action/userAction";
import _ from "lodash";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  useEffect(() => {
    document.title = `Login`;
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.signIn);
  const status = useSelector((state) => state.users.status);
  const message = useSelector((state) => state.users.message);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    history.push("/register");
  };

  const handleHome = () => {
    history.push("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    NotificationManager.info("Loading", "", 3000);
    dispatch(postSignIn(userData));
    // .then((res) => {
    // if (!res) {
    //   NotificationManager.info("Email/Password is wrong", "", 1000);
    // }
    // });
  };

  useEffect(() => {
    if (message.status === 404) {
      NotificationManager.error(message.data.message, "", 2000);
    } else if (message.status === 400) {
      NotificationManager.error(message.data.message, "", 2000);
    }
  }, [message]);

  // console.log("message =>", message);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const token = localStorage.getItem("token");

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  useEffect(() => {
    if (status) {
      history.push("/");
    } else if (status === false) {
      history.push("/onboarding");
      window.location.reload(true);
    }
  }, [status, history]);

  return (
    <>
      <div className="bg-login">
        <img
          onClick={handleHome}
          className="login-logo"
          src={Logo}
          alt="sportsman"
        />
        <div className="login-container">
          <h2>SIGN IN</h2>
          {token ? (
            <div>
              <h2>You Already Sign as {decoded.name}</h2>
              <p>
                <span onClick={handleHome}>Click here</span> to redirect to
                Homepage
              </p>
            </div>
          ) : (
            <>
              <div className="form__group field">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group field">
                <input
                  type="password"
                  className="form__field"
                  placeholder="Password"
                  name="password"
                  id="password"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>

              <button onClick={onSubmit} className="signin-button">
                SIGN IN
              </button>
              <div className="redirect">
                Don't have an account?
                <span onClick={handleSignUp}> Register here</span>
                <NotificationContainer />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
