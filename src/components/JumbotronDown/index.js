import React, { useEffect } from "react";
import jumbotronImage from "../../assets/img/jumbotron/image1.png";
import { googleSignin } from "../../redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";

const JumbotronDown = () => {
  const googleAuth = useSelector((state) => state.users.google);

  const dispatch = useDispatch();

  const handleGoogle = (e) => {
    dispatch(googleSignin());
    window.location.href = googleAuth;
  };

  useEffect(() => {
    dispatch(googleSignin());
  }, [dispatch]);

  return (
    <>
      <div
        className="jumbotron-down"
        style={{ backgroundImage: `url(${jumbotronImage})` }}
      >
        <h1>Join Sportsman for free</h1>
        <div>
          <button className="fb">
            <i className="fab fa-facebook-f"></i>&nbsp; Facebook
          </button>
        </div>
        <div>
          <button onClick={handleGoogle} className="google">
            <i className="fab fa-google"></i>&nbsp; Google
          </button>
        </div>
        <a href="#">Signup with email</a>
        <p>
          By signing up for Sportsman, you agree to the Terms of Service. View
          our Privacy Policy.
        </p>
      </div>
      <div className="subscription">
        <h3>Sportsman Subscription</h3>
        <div className="explore-button">
          <button>Explore</button>
        </div>
      </div>
    </>
  );
};

export default JumbotronDown;
