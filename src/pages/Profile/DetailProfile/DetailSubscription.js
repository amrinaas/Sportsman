import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

const DetailSubscription = () => {
  return (
    <div>
      <h2>Your Sportsman Journey Starts Now</h2>
      <h4>Choose the plan that fits you best and get started</h4>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5" style={{ textAlign: "center" }}>
              Training Coach
            </CardTitle>
            <CardText>
              Build muscle or burn fat with high-intensity training
            </CardText>
            <div className="price">
              <h3>
                $1.38 <span>/week</span>
              </h3>
            </div>
            <p>Billed every 3 months</p>
            <Button className="mt-4">Get Training Coach</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5" style={{ textAlign: "center" }}>
              Training & Nutrition
            </CardTitle>
            <CardText>
              Combine Training and Nutrition Coaches to eat better
            </CardText>
            <div className="price">
              <h3>
                $2.08 <span>/week</span>
              </h3>
            </div>
            <p>Billed every 3 months</p>
            <Button className="mt-4">Get Coach Bundle</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailSubscription;
