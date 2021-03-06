import React, { useState } from "react";
import { Jumbotron, Container } from "reactstrap";
import Navbar from "../Navbar1";
import background from "../../assets/img/jumbotron/jumbotron-nav.png";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useHistory } from "react-router-dom";

function JumbotronUp(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem("token");
  const toggle = () => setModal(!modal);

  const handleClick = () => {
    history.push("/content");
  };

  return (
    <div>
      <Jumbotron
        className="background"
        style={{
          backgroundImage: `url(${background})`,
          paddingTop: "0",
          marginBottom: `0`,
          borderRadius: `0`,
        }}
      >
        <Navbar />
        <h1 className="background__text">
          Track every aspect of your workouts.
        </h1>
        <button
          className="background__button"
          onClick={token ? handleClick : toggle}
        >
          Ready to Sweat
        </button>
      </Jumbotron>

      <div>
        <Jumbotron
          style={{
            backgroundColor: `rgba(54, 54, 54, 1)`,
            marginBottom: `0`,
            borderRadius: `0`,
          }}
        >
          <Container className="body__text">
            <h1>It all starts with the best tracking</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              posuere sit amet erat nec ullamcorper. Nunc luctus maximus erat a
              imperdiet.
            </p>
          </Container>
        </Jumbotron>
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Warning</ModalHeader>
        <ModalBody>Please sign in to access content</ModalBody>
      </Modal>
    </div>
  );
}

export default JumbotronUp;
