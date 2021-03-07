import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo/Logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postSignUp } from "../../redux/Action/userAction";

const RegisterPage = () => {

  useEffect(() => {
    document.title = `Register`;
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.signUp);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    history.push("/login");
  };

  const handleHome = () => {
    history.push("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Register");
    dispatch(postSignUp(userData));
    history.push("/login");
  };

	console.log('userData =>', userData);
	console.log('data =>', data);
  
  const handleChange = (e) => {
    console.log("log handle change");
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

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
          <h2>Register</h2>

          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
              onChange={handleChange}
            />
            <label for="name" className="form__label">
              Name
            </label>
          </div>

          <div className="form__group field">
            <input
              type="emailt"
              className="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label for="email" className="form__label">
              Email
            </label>
          </div>

          <div className="form__group field">
            <input
              type="password"
              className="form__field"
              placeholder="Pasword"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
            <label for="password" className="form__label">
              Password
            </label>
          </div>

          <button onClick={onSubmit} className="signin-button">
            SIGN UP
          </button>
          <div className="redirect">
            Already have an account?
            <span onClick={handleSignIn}> Login here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
