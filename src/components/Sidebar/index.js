import React from "react";
import { useHistory } from "react-router-dom";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/img/logo/orange.png";

const Sidebar = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <Col className="sidebar-content">
        <img onClick={handleClick} className="logo-admin" src={logo} alt="" />
        <ListGroup className="list-content">
          <ListGroupItem
            className="list-content-item mt-2"
            tag="a"
            href="/admin-dashboard"
          >
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </ListGroupItem>
          <ListGroupItem
            className="list-content-item mt-2"
            tag="a"
            href="/admin-content"
          >
            <i className="fas fa-photo-video"></i> Add Content
          </ListGroupItem>
          <ListGroupItem className="list-content-item mt-2" tag="a" href="#">
            <i className="fas fa-user-slash"></i> Remove User
          </ListGroupItem>
        </ListGroup>
      </Col>
    </>
  );
};
export default Sidebar;
