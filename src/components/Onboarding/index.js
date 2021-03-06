import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putBoardingData } from "../../redux/Action/userAction";
import Logo from "../../assets/img/logo/Logo.png";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";

const OnBoarding = () => {
  useEffect(() => {
    document.title = `On Board`;
  });

  const token = localStorage.getItem("token");
  const history = useHistory();
  const boarding = useSelector((state) => state.users.boarding);
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");

  const handleHome = () => {
    history.push("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      gender: gender,
      level: level,
    };
    dispatch(putBoardingData(token, body));
  };

  useEffect(() => {
    console.log("ini gender", gender);
    console.log("ini level", level);
    console.log("ini boarding", boarding);
    if (boarding.status === 200) {
      history.push("/");
    }
  }, [gender, level, boarding, history]);

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
          <h2>Select Gender</h2>
          <div className="form__group field">
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input
                    onChange={(e) => setGender(e.target.value)}
                    type="radio"
                    name="gender"
                    value="male"
                  />{" "}
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    onChange={(e) => setGender(e.target.value)}
                    type="radio"
                    name="gender"
                    value="female"
                  />{" "}
                  Female
                </Label>
              </FormGroup>
            </FormGroup>
          </div>

          <h2>Select level</h2>
          <div className="form__group field">
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input
                    onChange={(e) => setLevel(e.target.value)}
                    type="radio"
                    name="level"
                    value="1"
                  />{" "}
                  Often
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    onChange={(e) => setLevel(e.target.value)}
                    type="radio"
                    name="level"
                    value="2"
                  />{" "}
                  Sometimes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    onChange={(e) => setLevel(e.target.value)}
                    type="radio"
                    name="level"
                    value="3"
                  />{" "}
                  Rarely
                </Label>
              </FormGroup>
            </FormGroup>
          </div>

          <button onClick={onSubmit} className="signin-button">
            Submit
          </button>
          <div className="redirect"></div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
