import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card, Col, Container, Row } from "reactstrap";
import Navbar from "../../components/Navbar2";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    e.target.className === "1" ? setIsOpen(!isOpen) : setIsOpen(isOpen);
  };

  useEffect(() => {
    document.title = "FAQ";
  });

  return (
    <>
      <div className="jumbotron-faq">
        <Navbar />
        <div className="jumbotron-input">
          <p>Frequenty Asked Questions/FAQ</p>
          <div className="input-icon">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="              Search Your Questions Here"
            />
          </div>
        </div>
      </div>

      <Container className="mt-5 mb-5">
        <Row>
          <Col md="4">
            <div className="titles">
              <ul style={{ fontWeight: 500 }}>
                <li>
                  Get Started
                  <hr />
                </li>
                <li>
                  Record & Sync
                  <hr />
                </li>
                <li>
                  Apps & Integrations
                  <hr />
                </li>
                <li>
                  General Info
                  <hr />
                </li>
                <li>
                  Activities with Sportsman
                  <hr />
                </li>
                <li>
                  Privacy
                  <hr />
                </li>
                <li>
                  Community Tips
                  <hr />
                </li>
              </ul>
            </div>
          </Col>
          <Col md="6">
            <div className="questions">
              <ul style={{ fontWeight: 700 }}>
                <li>
                  <div
                    onClick={toggle}
                    style={{ cursor: "pointer" }}
                    className="1"
                  >
                    How to get your Activities to Sportsman?
                  </div>
                  <Collapse isOpen={isOpen}>
                    <Card>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                  <hr />
                </li>
                <li>
                  <div
                    onClick={toggle}
                    style={{ cursor: "pointer" }}
                    className="2"
                  >
                    How to track your activities?
                  </div>
                  <hr />
                </li>
                <li>
                  How to analyze your activities?
                  <hr />
                </li>
                <li>
                  How to use training feature?
                  <hr />
                </li>
                <li>
                  How to bookmark particular training video?
                  <hr />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
