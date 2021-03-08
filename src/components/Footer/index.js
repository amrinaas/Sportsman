import React from "react";
import { CardFooter, Col, Row } from "reactstrap";
import logo from "../../assets/img/logo/Vector.png";
import sportsman from "../../assets/img/logo/sportsman.png";
import googlePlay from "../../assets/img/logo/googlePlayStore.png";
import appStore from "../../assets/img/logo/appstore.png";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  //   const handleContact = () => {
  //     history.push("/contactus");
  //   };
  return (
    <>
      <div className="footer-app">
        <CardFooter
          className="text-muted"
          style={{
            backgroundColor: "#262626",
            position: "relative",
            bottom: "0",
          }}
        >
          <Row className="mt-5 ml-5">
            <Col md="2">
              <img src={logo} alt="" />
              <img src={sportsman} alt="" />
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                &copy;Copyright 2021. All right reserved
              </p>
            </Col>
            <Col md="2">
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                }}
              >
                <p style={{ color: "#80848D" }}>MENU</p>
                <li>Features</li>
                <li>Blog</li>
                <li>Business</li>
                <li>About</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col md="2">
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                }}
              >
                <p style={{ color: "#80848D" }}>SUPPORT</p>
                <li>Help Center</li>
                <a href="/faq" style={{ listStyle: "none", color: "white" }}>
                  FAQ
                </a>
                <li>
                  <a
                    href="/contact-us"
                    style={{ listStyle: "none", color: "white" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col md="3"></Col>
            <Col md="3">
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                }}
              >
                <p style={{ color: "#80848D" }}>GET STARTED</p>
                <li>
                  <img src={appStore} className="mb-3" alt="" />
                </li>
                <li>
                  <img src={googlePlay} alt="" />
                </li>
              </ul>
            </Col>
          </Row>
        </CardFooter>
      </div>
    </>
  );
};

export default Footer;
