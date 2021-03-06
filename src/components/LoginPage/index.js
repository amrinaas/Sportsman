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
    // Update the document title using the browser API
    document.title = `Login`;
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.signIn);
  const status = useSelector((state) => state.users.status);
  const errMessage = useSelector((state) => state.users.message);
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
    // console.log("Submit login");
    dispatch(postSignIn(userData));
    if (_.isEmpty(data)) {
      NotificationManager.info("Loading", "", 1000);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  // 	if (token && !_.isEmpty(token)) return token;
  // }, [token]);

  // const token =
  // 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDMzMjk3ZTA4ZmNlYTAwMjIxYjEyMjkiLCJuYW1lIjoiUGFsZXBhbGUiLCJnZW5kZXIiOiIwIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTM5NjU3NDF9.J8iXpCRFpxCc2PsUXMfG5wH2c55DIS1ul66Un2DgC5M';
  // const token = localStorage.getItem('token');
  // const decoded = jwtDecode(token);
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

  console.log("status =>", status);
  console.log("data =>", data);
  console.log("error Message =>", errMessage);

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
              {/* {setTimeout(
								() => (
									<Redirect to='/' />
								),
								5000
							)} */}
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
                <p>Logged in as: {data.name}</p>
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
