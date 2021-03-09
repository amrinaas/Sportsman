import React, { useEffect } from "react";
import jumbotronImage from "../../assets/img/jumbotron/image1.png";
import { googleSignin } from "../../redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
// import { useGoogleLogin, GoogleLogin } from "react-google-login";

const JumbotronDown = () => {
  // const { signIn, loaded } = useGoogleLogin({
  //   onSuccess: "",
  //   onAutoLoadFinished: "",
  //   clientId: "",
  //   cookiePolicy: "",
  //   loginHint: "",
  //   hostedDomain: "",
  //   autoLoad: "",
  //   isSignedIn: "",
  //   fetchBasicProfile: "",
  //   redirectUri: "",
  //   discoveryDocs: "",
  //   onFailure: "",
  //   uxMode: "",
  //   scope: "",
  //   accessType: "",
  //   responseType: "",
  //   jsSrc: "",
  //   onRequest: "",
  //   prompt,
  // });

  const googleAuth = useSelector((state) => state.users.google);

  const dispatch = useDispatch();

  const handleGoogle = (e) => {
    dispatch(googleSignin());
    window.location.href = googleAuth;
  };

  // useEffect(() => {
  //   dispatch(googleSignin());
  // }, [dispatch]);

  // const responseGoogle = (response) => {
  //   console.log("google response =>", response);
  // };

  // console.log("Google Auth =>", googleAuth);
  // console.log("Sign IN =>", signIn);

  return (
    <>
      {/* <GoogleLogin
        clientId="114486350621-53onku2b35dmbdk4euc4er63sh09i9ek.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={googleAuth}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /> */}
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
        {/* <a href="#">Signup with email</a> */}
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
